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

/// --- REGISTRO DE ENTRADA CORRIGIDO ---
document.getElementById('btnAvisarChegada').addEventListener('click', () => {
    const casa = document.getElementById('casaEntrada').value.trim();
    const doc = document.getElementById('docEntrada').value;

    if (!casa || !doc) return alert("Por favor, preencha a casa e o documento!");

    // 1. Verifica se a casa existe no seu banco de dados
    const moradores = bancoMoradores[casa];

    if (!moradores) {
        return alert("Casa não encontrada no banco de dados! Verifique o número.");
    }

    // 2. Salva os dados temporários
    localStorage.setItem(`doc_pendente_${casa}`, doc);
    localStorage.setItem(`foto_pendente_${casa}`, fotoBase64);

    // 3. Envia o WhatsApp e avisa o usuário
    avisarWhatsApp(moradores[0].tel, `Encomenda chegou! Unidade ${casa} (Ref: ${doc}).`);
    alert("Registrado com sucesso e aviso enviado!");

    // 4. Limpa os campos e a foto para o próximo registro
    document.getElementById('casaEntrada').value = "";
    document.getElementById('docEntrada').value = "";
    fotoPreview.style.display = "none";
    fotoBase64 = ""; // Reseta a foto para não salvar na casa errada depois
});