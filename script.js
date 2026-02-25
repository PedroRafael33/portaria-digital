// 1. BANCO DE DADOS - Adicione os moradores aqui
const bancoMoradores = {
    "101": [
        { nome: "João Silva", tel: "5567998878106" },
        { nome: "Maria Souza", tel: "5567888888888" }
    ],
    "102": [{ nome: "Ana Paula", tel: "5567777777777" }]
};

// Elementos
const canvas = document.getElementById('canvasAssinatura');
const ctx = canvas.getContext('2d');
const tabelaCorpo = document.querySelector('#tabelaHistorico tbody');
const video = document.getElementById('video');
const canvasFoto = document.getElementById('canvasFoto');
const fotoPreview = document.getElementById('fotoPreview');
let fotoBase64 = ""; 

// --- CARREGAR DADOS ---
window.onload = () => {
    const dadosSalvos = JSON.parse(localStorage.getItem('registrosPortaria')) || [];
    tabelaCorpo.innerHTML = "";
    dadosSalvos.forEach(item => {
        adicionarLinhaTabela(item.casa, item.nome, item.doc, item.hora, item.assinatura, item.foto, false);
    });
};

// --- FUNÇÃO ADICIONAR LINHA ---
function adicionarLinhaTabela(casa, nome, doc, hora, assinatura, foto, salvar = true) {
    const novaLinha = tabelaCorpo.insertRow(0);
    novaLinha.insertCell(0).innerText = casa;
    novaLinha.insertCell(1).innerText = nome;
    novaLinha.insertCell(2).innerText = doc;
    novaLinha.insertCell(3).innerText = hora;
    novaLinha.setAttribute('data-assinatura', assinatura);
    novaLinha.setAttribute('data-foto', foto || "");
    if (salvar) salvarDados();
}

// --- CÂMERA ---
document.getElementById('btnAbrirCamera').addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    video.srcObject = stream;
    video.style.display = "block";
    document.getElementById('btnTirarFoto').style.display = "block";
});

document.getElementById('btnTirarFoto').addEventListener('click', () => {
    canvasFoto.width = 320; 
    canvasFoto.height = 240;
    canvasFoto.getContext('2d').drawImage(video, 0, 0, 320, 240);
    fotoBase64 = canvasFoto.toDataURL('image/jpeg', 0.5);
    fotoPreview.src = fotoBase64;
    fotoPreview.style.display = "block";
    video.srcObject.getTracks().forEach(track => track.stop());
    video.style.display = "none";
});

// --- REGISTRO DE ENTRADA ---
document.getElementById('btnAvisarChegada').addEventListener('click', () => {
    const casa = document.getElementById('casaEntrada').value.trim();
    const doc = document.getElementById('docEntrada').value;
    const moradores = bancoMoradores[casa];

    if (!casa || !doc) return alert("Preencha casa e documento!");
    if (!moradores) return alert("Casa não cadastrada!");

    localStorage.setItem(`doc_pendente_${casa}`, doc);
    localStorage.setItem(`foto_pendente_${casa}`, fotoBase64);

    const link = `https://wa.me/${moradores[0].tel}?text=${encodeURIComponent("Encomenda chegou! Unidade " + casa + " (Ref: " + doc + ")")}`;
    window.open(link, '_blank');
    
    alert("Registrado!");
    document.getElementById('casaEntrada').value = "";
    document.getElementById('docEntrada').value = "";
    fotoPreview.style.display = "none";
    fotoBase64 = "";
});

// --- BUSCA MORADOR PARA RETIRADA ---
document.getElementById('confirmarCasa').addEventListener('input', (e) => {
    const casa = e.target.value.trim();
    const select = document.getElementById('selectMorador');
    select.innerHTML = '<option value="">Selecione...</option>';
    if (bancoMoradores[casa]) {
        bancoMoradores[casa].forEach((m, i) => {
            let op = document.createElement('option');
            op.value = i; op.text = m.nome;
            select.add(op);
        });
    }
});

// --- FINALIZAR ---
document.getElementById('btnFinalizar').addEventListener('click', () => {
    const casa = document.getElementById('confirmarCasa').value.trim();
    const idx = document.getElementById('selectMorador').value;
    if (!casa || idx === "") return alert("Selecione o morador!");

    const doc = localStorage.getItem(`doc_pendente_${casa}`) || "N/A";
    const foto = localStorage.getItem(`foto_pendente_${casa}`) || "";
    const assinatura = canvas.toDataURL();

    adicionarLinhaTabela(casa, bancoMoradores[casa][idx].nome, doc, new Date().toLocaleString(), assinatura, foto);
    
    localStorage.removeItem(`doc_pendente_${casa}`);
    localStorage.removeItem(`foto_pendente_${casa}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('confirmarCasa').value = "";
});

// --- SALVAR E PDF ---
function salvarDados() {
    const dados = [];
    document.querySelectorAll('#tabelaHistorico tbody tr').forEach(tr => {
        dados.push({
            casa: tr.cells[0].innerText, nome: tr.cells[1].innerText, doc: tr.cells[2].innerText,
            hora: tr.cells[3].innerText, assinatura: tr.getAttribute('data-assinatura'), foto: tr.getAttribute('data-foto')
        });
    });
    localStorage.setItem('registrosPortaria', JSON.stringify(dados));
}

document.getElementById('btnPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const docPDF = new jsPDF();
    const rows = [];
    document.querySelectorAll('#tabelaHistorico tbody tr').forEach(tr => {
        rows.push([tr.cells[0].innerText, tr.cells[1].innerText, tr.cells[2].innerText, tr.cells[3].innerText, "", ""]);
    });
    docPDF.autoTable({
        head: [['Casa', 'Morador', 'Nota', 'Hora', 'Foto', 'Assinatura']],
        body: rows,
        didDrawCell: (data) => {
            const trs = document.querySelectorAll('#tabelaHistorico tbody tr');
            if (data.cell.section === 'body') {
                const imgFoto = trs[data.row.index].getAttribute('data-foto');
                const imgAssin = trs[data.row.index].getAttribute('data-assinatura');
                if (data.column.index === 4 && imgFoto) docPDF.addImage(imgFoto, 'JPEG', data.cell.x + 2, data.cell.y + 2, 20, 12);
                if (data.column.index === 5 && imgAssin) docPDF.addImage(imgAssin, 'PNG', data.cell.x + 2, data.cell.y + 2, 20, 8);
            }
        },
        bodyStyles: { minCellHeight: 18 }
    });
    docPDF.save("relatorio.pdf");
});

// Assinatura
let desenhando = false;
canvas.addEventListener('touchstart', (e) => { 
    desenhando = true; ctx.beginPath(); 
    const rect = canvas.getBoundingClientRect();
    ctx.moveTo(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
    e.preventDefault();
}, {passive: false});
canvas.addEventListener('touchmove', (e) => {
    if (desenhando) {
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
        ctx.stroke();
    }
    e.preventDefault();
}, {passive: false});
window.addEventListener('touchend', () => desenhando = false);
document.getElementById('btnLimpar').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));