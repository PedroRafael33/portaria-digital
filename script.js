// 1. BANCO DE DADOS
const bancoMoradores = {
    "101": [
        { nome: "João Silva", tel: "5567998878106" },
        { nome: "Maria Souza", tel: "5567888888888" }
    ],
    "102": [{ nome: "Ana Paula", tel: "5567777777777" }]
};

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
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        video.style.display = "block";
        document.getElementById('btnTirarFoto').style.display = "block";
    } catch (e) { alert("Câmera não disponível"); }
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

// --- 1. REGISTRO DE ENTRADA ---
document.getElementById('btnAvisarChegada').addEventListener('click', () => {
    const casa = document.getElementById('casaEntrada').value.trim();
    const doc = document.getElementById('docEntrada').value.trim();
    if (!casa || !doc || !bancoMoradores[casa]) return alert("Confira a casa e o documento!");

    localStorage.setItem(`doc_p_${casa}`, doc);
    localStorage.setItem(`foto_p_${casa}`, fotoBase64);

    window.open(`https://wa.me/${bancoMoradores[casa][0].tel}?text=Sua encomenda (${doc}) chegou!`, '_blank');
    alert("Registrado!");
    document.getElementById('casaEntrada').value = "";
    document.getElementById('docEntrada').value = "";
    fotoPreview.style.display = "none";
    fotoBase64 = "";
});

// --- BUSCA MORADOR ---
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

// --- 2. FINALIZAR ENTREGA (CORRIGIDO) ---
document.getElementById('btnFinalizar').addEventListener('click', () => {
    const casa = document.getElementById('confirmarCasa').value.trim();
    const idx = document.getElementById('selectMorador').value;
    
    if (!casa || idx === "" || !bancoMoradores[casa]) return alert("Selecione o morador!");

    const doc = localStorage.getItem(`doc_p_${casa}`) || "N/A";
    const foto = localStorage.getItem(`foto_p_${casa}`) || "";
    const assinatura = canvas.toDataURL();

    adicionarLinhaTabela(casa, bancoMoradores[casa][idx].nome, doc, new Date().toLocaleString(), assinatura, foto);
    
    localStorage.removeItem(`doc_p_${casa}`);
    localStorage.removeItem(`foto_p_${casa}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('confirmarCasa').value = "";
    alert("Entrega Finalizada!");
});

// --- LÓGICA DE ASSINATURA (ADICIONADA) ---
let desenhando = false;
function obterPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clienteX = e.touches ? e.touches[0].clientX : e.clientX;
    const clienteY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clienteX - rect.left, y: clienteY - rect.top };
}
const iniciar = (e) => { desenhando = true; ctx.beginPath(); const p = obterPos(e); ctx.moveTo(p.x, p.y); if(e.touches) e.preventDefault(); };
const mover = (e) => { if(!desenhando) return; const p = obterPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); if(e.touches) e.preventDefault(); };
canvas.addEventListener('mousedown', iniciar); canvas.addEventListener('touchstart', iniciar, {passive: false});
canvas.addEventListener('mousemove', mover); canvas.addEventListener('touchmove', mover, {passive: false});
window.addEventListener('mouseup', () => desenhando = false); window.addEventListener('touchend', () => desenhando = false);

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
            if (data.cell.section === 'body') {
                const tr = document.querySelectorAll('#tabelaHistorico tbody tr')[data.row.index];
                if (data.column.index === 4 && tr.getAttribute('data-foto')) docPDF.addImage(tr.getAttribute('data-foto'), 'JPEG', data.cell.x+2, data.cell.y+2, 20, 12);
                if (data.column.index === 5 && tr.getAttribute('data-assinatura')) docPDF.addImage(tr.getAttribute('data-assinatura'), 'PNG', data.cell.x+2, data.cell.y+2, 20, 8);
            }
        },
        bodyStyles: { minCellHeight: 18 }
    });
    docPDF.save("relatorio.pdf");
});

document.getElementById('btnLimpar').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));