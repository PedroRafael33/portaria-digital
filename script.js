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
    dadosSalvos.reverse().forEach(item => {
        adicionarLinhaTabela(item.casa, item.nome, item.doc, item.hora, item.assinatura, item.foto, false);
    });
};

// --- FUNÇÃO ADICIONAR LINHA (Com Foto) ---
function adicionarLinhaTabela(casa, nome, doc, hora, assinatura, foto, salvar = true) {
    const novaLinha = tabelaCorpo.insertRow(0);
    novaLinha.insertCell(0).innerText = casa;
    novaLinha.insertCell(1).innerText = nome;
    novaLinha.insertCell(2).innerText = doc;
    novaLinha.insertCell(3).innerText = hora;
    
    // Guardamos a foto e a assinatura como atributos invisíveis na linha
    novaLinha.setAttribute('data-assinatura', assinatura);
    novaLinha.setAttribute('data-foto', foto || "");

    if (salvar) salvarDados();
}

// --- LÓGICA DA CÂMERA ---
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
    fotoBase64 = canvasFoto.toDataURL('image/jpeg', 0.5); // Reduz qualidade para não pesar
    fotoPreview.src = fotoBase64;
    fotoPreview.style.display = "block";
    video.srcObject.getTracks().forEach(track => track.stop());
    video.style.display = "none";
});

// --- REGISTRO DE ENTRADA ---
document.getElementById('btnAvisarChegada').addEventListener('click', () => {
    const casa = document.getElementById('casaEntrada').value.trim();
    const doc = document.getElementById('docEntrada').value;
    if (!casa || !doc) return alert("Preencha os dados!");

    localStorage.setItem(`doc_pendente_${casa}`, doc);
    localStorage.setItem(`foto_pendente_${casa}`, fotoBase64);

    avisarWhatsApp(bancoMoradores[casa][0].tel, `Encomenda chegou! Unidade ${casa} (Ref: ${doc}).`);
    alert("Registrado!");
    fotoPreview.style.display = "none";
    fotoBase64 = "";
});

// --- FINALIZAR (Retirada) ---
document.getElementById('btnFinalizar').addEventListener('click', () => {
    const casa = document.getElementById('confirmarCasa').value.trim();
    const index = document.getElementById('selectMorador').value;
    const doc = localStorage.getItem(`doc_pendente_${casa}`) || "N/A";
    const foto = localStorage.getItem(`foto_pendente_${casa}`) || "";

    if (!casa || index === "") return alert("Selecione o morador!");

    const assinatura = canvas.toDataURL();
    adicionarLinhaTabela(casa, bancoMoradores[casa][index].nome, doc, new Date().toLocaleString(), assinatura, foto);
    
    localStorage.removeItem(`doc_pendente_${casa}`);
    localStorage.removeItem(`foto_pendente_${casa}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// --- SALVAR NO BANCO LOCAL ---
function salvarDados() {
    const dados = [];
    document.querySelectorAll('#tabelaHistorico tbody tr').forEach(tr => {
        dados.push({
            casa: tr.cells[0].innerText,
            nome: tr.cells[1].innerText,
            doc: tr.cells[2].innerText,
            hora: tr.cells[3].innerText,
            assinatura: tr.getAttribute('data-assinatura'),
            foto: tr.getAttribute('data-foto')
        });
    });
    localStorage.setItem('registrosPortaria', JSON.stringify(dados));
}

// --- PDF COM FOTO E ASSINATURA ---
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
            const linha = trs[data.row.index];
            if (data.cell.section === 'body') {
                if (data.column.index === 4) { // Coluna da Foto
                    const imgFoto = linha.getAttribute('data-foto');
                    if (imgFoto) docPDF.addImage(imgFoto, 'JPEG', data.cell.x + 2, data.cell.y + 2, 25, 15);
                }
                if (data.column.index === 5) { // Coluna da Assinatura
                    const imgAssin = linha.getAttribute('data-assinatura');
                    if (imgAssin) docPDF.addImage(imgAssin, 'PNG', data.cell.x + 2, data.cell.y + 2, 25, 10);
                }
            }
        },
        bodyStyles: { minCellHeight: 20 }
    });
    docPDF.save("relatorio_portaria.pdf");
});