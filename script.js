// 1. BANCO DE DADOS ATUALIZADO - RESIDENCIAL PATRICIA GALVAO
const bancoMoradores = {
    "01": [{ nome: "VITORIA RUIZ / LEOVAN MACHADO", tel: "5567992310139" }],
    "02": [{ nome: "MARIA ELIANE PEREIRA FIXINO", tel: "5567996411879" }],
    "03": [{ nome: "SONIA PAREDES BARBOZA", tel: "5567996375084" }],
    "04": [{ nome: "CASA 004", tel: "" }],
    "05": [{ nome: "EUNICE DE OLIVEIRA SILVA", tel: "5567992797575" }],
    "06": [{ nome: "ANILTON CARDOSO DA SILVA", tel: "5567992421924" }],
    "07": [{ nome: "ALESSANDRA DOS SANTOS ALVES", tel: "5567998233230" }],
    "08": [{ nome: "MARIA APARECIDA DIAS", tel: "5567991279250" }],
    "09": [{ nome: "DENILSON CEZARIO NEPOMUCENO", tel: "5567991163698" }],
    "10": [{ nome: "CASA 010", tel: "" }],
    "11": [{ nome: "MORADOR PRINCIPAL", tel: "" }],
    "12": [{ nome: "DIEGO DE OLIVEIRA LIMA", tel: "5567992956669" }],
    "13": [{ nome: "CRISTIANE APARECIDA RUFINO", tel: "5567982130063" }],
    "14": [{ nome: "HILDA NOGUEIRA DA SILVA", tel: "5567992162264" }],
    "15": [{ nome: "MARIA ELIANE DA SILVA", tel: "5567998907735" }],
    "16": [{ nome: "HUMBERTO MARTINS PEREIRA", tel: "5567999257743" }],
    "17": [{ nome: "LEONARDO LINS ESTEVAO", tel: "5567992002107" }],
    "18": [{ nome: "GLADYS DE SOUZA ASSUNCAO", tel: "5567992893775" }],
    "19": [{ nome: "CAROLINA ELIZABETE DA MATA", tel: "5567991053333" }],
    "20": [{ nome: "ERAILTON ROBERTO PAZ MELGAR", tel: "556792888760" }],
    "21": [{ nome: "JANALUCE BROWN DE ORTIZ", tel: "556792524404" }],
    "22": [{ nome: "ROSIMEIRE MARTINS DA SILVEIRA", tel: "556799235089" }],
    "23": [{ nome: "JESSICA LOIANI SOUZA", tel: "5567991857670" }],
    "24": [{ nome: "JAIRO DE OLIVEIRA LIMA", tel: "5567992019342" }],
    "25": [{ nome: "GISELE APARECIDA PAVAO", tel: "5567996157909" }],
    "26": [{ nome: "CLEBERSON SILVA NASCIMENTO", tel: "556791550769" }],
    "27": [
        { nome: "PEDRO RAFAEL LOPES GARCIA", tel: "5567998878106" },
        { nome: "VALDECY DA SILVA ", tel: "556792277815" }
        ],
    "28": [{ nome: "GISELY DINIZ FERREIRA", tel: "5567992514308" }],
    "29": [{ nome: "CELSO BUGATI CABANHA", tel: "5567992436787" }],
    "30": [{ nome: "EDISON SCHIAVI", tel: "556799063505" }],
    "31": [{ nome: "EDISON SCHIAVI", tel: "5567999063505" }],
    "32": [{ nome: "MARCIANO CREPALDI", tel: "5567996340315" }],
    "33": [{ nome: "ROBINSON ALT", tel: "5567991183939" }],
    "34": [{ nome: "GUSTAVO HENRI COUTO", tel: "5567981549700" }],
    "35": [{ nome: "THAIS OLIVEIRA DOS SANTOS", tel: "5567992436787" }],
    "36": [{ nome: "CELSO BUGATTI", tel: "5567992436787" }],
    "37": [{ nome: "WALDINEI OLIVEIRA CABALLERO", tel: "5567999281255" }],
    "38": [{ nome: "NILSON GREGO", tel: "5567981491127" }],
    "39": [{ nome: "MARCIO GONZALES ESPINDOLA", tel: "5567992241343" }],
    "40": [{ nome: "CRISTINA MARIA PEREIRA", tel: "5567991293333" }],
    "41": [{ nome: "THIAGO SOUZA MATTOSO", tel: "5567992829496" }],
    "42": [{ nome: "TELMA PEDROGA NOBRE", tel: "5567999369454" }],
    "43": [{ nome: "EDMAR SOARES DE ARRUDA", tel: "5567996475677" }],
    "44": [{ nome: "EWERTON RODRIGUES FERREIRA", tel: "5567991578080" }],
    "45": [{ nome: "SOLANGE NONATO", tel: "5567992211831" }],
    "46": [{ nome: "KLEBER GOMES", tel: "5567999801369" }],
    "47": [{ nome: "KARINE LEMES NABHAN", tel: "5567992673755" }],
    "48": [{ nome: "KEILE SANDRA RODRIGUES", tel: "5567992252239" }],
    "49": [{ nome: "NILVA ZENIRA LOPES", tel: "5567992630618" }],
    "50": [{ nome: "FRANCISCA MIGUEL VICENTE", tel: "5567992261881" }],
    "51": [{ nome: "PATRICIA GONCALVES COSTA", tel: "5567992692840" }],
    "52": [{ nome: "SIRLEY SOUZA DA CONCEICAO", tel: "5567992349061" }],
    "53": [{ nome: "LUIZ CARLOS RIBEIRO", tel: "5567999570900" }],
    "54": [{ nome: "MAX DELMIRO ALVES DE SOUZA", tel: "5567991299676" }],
    "55": [{ nome: "RICARDO FERREIRA DOS SANTOS", tel: "5567991259323" }],
    "56": [{ nome: "HELIO RIBEIRO DE OLIVEIRA", tel: "5567981345997" }],
    "57": [{ nome: "CRISTINA ALVES DE ALMEIDA", tel: "5567996079206" }],
    "58": [{ nome: "ROBERTO FAGUNDES DE ALMEIDA", tel: "5567999996886" }],
    "59": [{ nome: "ANGELA GOMES MEDEIROS", tel: "5567992359507" }],
    "60": [{ nome: "MARCIO FERNANDO DE SOUZA", tel: "5567992510652" }],
    "61": [{ nome: "CRISTIANE CAUNETO COINETE", tel: "5567992214465" }],
    "62": [{ nome: "VERDISON DE LIMA", tel: "5567943999241" }],
    "63": [{ nome: "EDIFICA CONSTRUÇÕES / HUMBERTO", tel: "5567999257743" }],
    "64": [{ nome: "WINSTON LUNA DA COSTA", tel: "5567991044164" }],
    "65": [{ nome: "RODRIGO DOS REIS SILVA", tel: "5567996164241" }],
    "66": [{ nome: "DAIANA DA SILVA MENDONÇA", tel: "5567992919465" }],
    "67": [{ nome: "JUSCILAINE CARVALHO CARDOSO", tel: "5567992808915" }],
    "68": [{ nome: "MICHEL APARECIDO SALVIANO", tel: "5567999131592" }],
    "69": [{ nome: "ANDRE LUIZ SALES DE LIMA", tel: "5567991305184" }],
    "70": [{ nome: "LUDMILA OLIVEIRA DE SOUZA", tel: "5567992972727" }],
    "71": [{ nome: "JOBE SABALA / ANA PAULA", tel: "5567992671712" }],
    "72": [{ nome: "ANDRE FELIPE MANCANEIRA", tel: "5567992137161" }],
    "73": [{ nome: "ELAINE AZEVEDO INÁCIO", tel: "5567984363312" }],
    "74": [{ nome: "LUCI CORDEIRO DE MACEDO", tel: "5567999838793" }],
    "75": [{ nome: "RAFAEL PEREIRA INACIO", tel: "5567992749809" }],
    "76": [{ nome: "FLAVIO CALADO DA SILVA", tel: "5567992862724" }],
    "77": [{ nome: "MARCIO ANTONIO PEREIRA", tel: "5567992425373" }],
    "78": [{ nome: "IVANIR DE OLIVEIRA GUARAGNI", tel: "5567991089371" }],
    "79": [{ nome: "SINEIA BARROS XAVIER", tel: "5567991128008" }],
    "80": [{ nome: "ALEIXO PARAGUASSU NETO", tel: "5567991767070" }],
    "81": [{ nome: "SUELY LEITE GOMES", tel: "55679991247328" }],
    "82": [{ nome: "CASA 82", tel: "" }],
    "83": [{ nome: "ROSANEA SOUZA DA SILVA", tel: "5567999633279" }],
    "84": [{ nome: "MARCIA ORIANA DIAS CLAVICO", tel: "5567992228188" }],
    "85": [{ nome: "MARCIO SEVERIANO DE SOUZA", tel: "5567999291800" }],
    "86": [{ nome: "ENNE KETTY COELHO DA SILVA", tel: "5567992229806" }],
    "87": [{ nome: "JOSE AUGUSTO RODRIGUES", tel: "5567996226838" }],
    "88": [{ nome: "GENIVALDO SANTOS FERREIRA", tel: "5567992303005" }],
    "89": [{ nome: "JOAO PAULO SOARES DA SILVA", tel: "5567991089371" }],
    "90": [{ nome: "JANAINA CAVANHA LAVOYER", tel: "5567999576447" }],
    "91": [{ nome: "CLEONICE PAULO DE OLIVEIRA", tel: "5567992695546" }],
    "92": [{ nome: "KELLY CRISTIANE FREITAS", tel: "5567992824058" }],
    "93": [{ nome: "WIVIANE APARECIDA SANTOS", tel: "5567992123267" }],
    "94": [{ nome: "IGOR DA SILVA CARVALHO", tel: "5567991784519" }],
    "95": [{ nome: "JOSE ALBINO LOPES", tel: "5567992118292" }],
    "96": [{ nome: "CASA 96", tel: "" }],
    "97": [{ nome: "KLEBER GOMES", tel: "556799980136" }],
    "98": [{ nome: "ANDREIA TALITA DE CAMARGO", tel: "5567992449506" }],
    "99": [{ nome: "VALMOR MENEZES GOMES", tel: "5567996253924" }],
    "100": [{ nome: "SILVANA JUBRICA DE CAMPOS", tel: "5567991100930" }],
    "101": [{ nome: "VALERIA GOMES HEMOTO", tel: "5567992018392" }],
    "102": [{ nome: "NEIDE HAIDUCK SILVA", tel: "5567991466494" }],
    "103": [{ nome: "CASA 103", tel: "" }],
    "104": [{ nome: "MARIA DE FATIMA PEREIRA", tel: "5567981770031" }],
    "105": [{ nome: "SILVIA PEIXOTO NANTES", tel: "5567992138778" }],
    "106": [{ nome: "ROBSON PAZETO DA SILVA", tel: "5567991167597" }],
    "107": [{ nome: "EVELYN MAYARA SANTANA", tel: "5567992675043" }],
    "108": [{ nome: "JOAO BERNALDO DOS SANTOS", tel: "5567933972464" }],
    "109": [{ nome: "MIRIANI ARAUJO DE SOUZA", tel: "5567991621705" }],
    "110": [{ nome: "ANDERSON ABDOM", tel: "5567992791744" }],
    "111": [{ nome: "DIEGO DAVI DA SILVA KLEIN", tel: "5567992472701" }],
    "112": [{ nome: "NADYELLE DEBOLETO OLIVEIRA", tel: "5567999911999" }],
    "113": [{ nome: "CELIA DE OLIVEIRA MACHADO", tel: "5567984011103" }],
    "114": [{ nome: "ADELMO TOLEDO LOURENCO", tel: "5567992325346" }],
    "115": [{ nome: "CRISTIANO APARECIDO FERREIRA", tel: "5567984247612" }],
    "116": [{ nome: "EVA LEMES DO PRADO", tel: "5567999044293" }],
    "117": [{ nome: "PAULA REZENDE ALIXANDRE", tel: "5567984052178" }],
    "118": [{ nome: "MILTON GOMES MACIEL", tel: "5567991910404" }],
    "119": [{ nome: "GLAZIELEN VILLARRUEL GIRAUD", tel: "5567992762212" }],
    "120": [{ nome: "CELIA REGINA VICENTE", tel: "5567992862284" }],
    "121": [{ nome: "TAIANE GOMES MUNIZ", tel: "5567984216784" }],
    "122": [{ nome: "JUCINEI VILELA", tel: "5567981154774" }],
    "123": [{ nome: "LAURA HOLSBACK ALVARENGA", tel: "5567992210238" }],
    "124": [{ nome: "ROSEMEIRE ALEGRE DORNELES", tel: "5567982243136" }],
    "125": [{ nome: "JACINTO GONZALES", tel: "5567991662510" }],
    "126": [{ nome: "MALVINA APARECIDA RIBOLI", tel: "5567992525660" }],
    "127": [{ nome: "EUNICE DA SILVA RODRIGUES", tel: "5567996138371" }],
    "128": [{ nome: "MARCELO PEREIRA DOS SANTOS", tel: "" }],
    "129": [{ nome: "RODRIGO KORITIAKI MARQUES", tel: "5567992299931" }],
    "130": [{ nome: "MICHEL DA SILVA PEREIRA", tel: "5567992554846" }],
    "131": [{ nome: "CARLOS LUCIANO NOGUEIRA", tel: "5567999299383" }],
    "132": [{ nome: "VAGNER OLIVEIRA SILVA", tel: "5567998474379" }],
    "133": [{ nome: "EDINEIA RITA DOS SANTOS", tel: "5567992403673" }],
    "134": [{ nome: "LEILA ROSA MARTINS", tel: "5567991873311" }],
    "135": [{ nome: "ELI SEVERINO VILA NOVA", tel: "5567999767898" }],
    "136": [{ nome: "LAIR REGINA DA LUZ", tel: "" }],
    "137": [{ nome: "NELSON CAETANO DA SILVA", tel: "5567981614661" }],
    "138": [{ nome: "NEUZA MEIRELLES BENITEZ", tel: "5567992182509" }],
    "139": [{ nome: "KELLY CHICRALA MATOS", tel: "5567981115523" }],
    "140": [{ nome: "FABIANA SOARES DA SILVA", tel: "5567996124242" }],
    "141": [{ nome: "LEANDRO DA SILVA", tel: "5567991039143" }],
    "142": [{ nome: "CLAUDIO DA SILVA PIZOLITO", tel: "5567992454511" }],
    "143": [{ nome: "MARCOS ANTONIO RAMOS", tel: "5567992088361" }],
    "144": [{ nome: "FLAVIO DA SILVA NUNES", tel: "5567992300425" }],
    "145": [{ nome: "FRANCISCA DAS CHAGAS", tel: "5567992427240" }],
    "146": [{ nome: "CYNTHIA VIEIRA GOMES", tel: "5567991287234" }],
    "147": [{ nome: "DARLUCY FERREIRA DOS SANTOS", tel: "5567992800513" }],
    "148": [{ nome: "MARIA APARECIDA DE SOUZA", tel: "5567981299421" }],
    "149": [{ nome: "CARLA ELIZABETH DA SILVA", tel: "5567992350805" }],
    "150": [{ nome: "LEANDRO POMPEO MARTINS", tel: "5567991293434" }],
    "151": [{ nome: "VALDECI BATISTA DA SILVA", tel: "5567992149992" }],
    "152": [{ nome: "JACKELINE SOUSA DA SILVA", tel: "5567981232984" }],
    "153": [{ nome: "SILVIA VILORDO", tel: "5567991509311" }],
    "154": [{ nome: "MAIRA APARECIDA AMARAL", tel: "5567992744815" }],
    "155": [{ nome: "VANESSA CACERES DA SILVA", tel: "5567981841530" }],
    "156": [{ nome: "WILSON DA COSTA", tel: "5567996485348" }],
    "157": [{ nome: "JAQUELINE DE LIMA GONCALVES", tel: "5567984058751" }],
    "158": [{ nome: "FERNANDA ALVES DE LIMA", tel: "5567981367262" }],
    "159": [{ nome: "JULIA MARIA FRANCO", tel: "5567933268522" }],
    "160": [{ nome: "ISAILSON ALVES DE OLIVEIRA", tel: "5567992647720" }],
    "161": [{ nome: "THALITA BORBA BARBOSA", tel: "5567992096593" }],
    "162": [{ nome: "GEMIMA PEREIRA DE LIMA", tel: "5567992496449" }],
    "163": [{ nome: "WILSON CARDOSO DA CRUZ", tel: "5567992277902" }],
    "164": [{ nome: "CORINA ARSENIA ALFONZO", tel: "5567992081700" }],
    "165": [{ nome: "MARIA DE LOURDES DA SILVA", tel: "5567992747076" }]
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

// --- BUSCA MORADOR PARA AVISO DE CHEGADA (VERSÃO CORRIGIDA) ---
document.getElementById('casaEntrada').addEventListener('input', (e) => {
    let casa = e.target.value.trim();
    const selectAviso = document.getElementById('selectMoradorAviso');
    
    // Se o usuário digitar apenas 1 dígito (ex: 1, 2), o sistema adiciona o 0 na frente automaticamente
    if (casa.length === 1 && casa !== "0") {
        casa = "0" + casa;
    }

    selectAviso.innerHTML = '<option value="">Selecione quem avisar...</option>';
    
    if (bancoMoradores[casa]) {
        bancoMoradores[casa].forEach((m, index) => {
            let op = document.createElement('option');
            op.value = index;
            op.text = m.nome;
            selectAviso.add(op);
        });
    } else {
        selectAviso.innerHTML = '<option value="">Casa não encontrada...</option>';
    }
});

// --- 1. REGISTRO DE ENTRADA (ATUALIZADO PARA ESCOLHA DE MORADOR) ---
document.getElementById('btnAvisarChegada').addEventListener('click', () => {
    const casa = document.getElementById('casaEntrada').value.trim();
    const doc = document.getElementById('docEntrada').value.trim();
    const idxMorador = document.getElementById('selectMoradorAviso').value;

    if (!casa || !doc || idxMorador === "") return alert("Selecione a casa, documento e morador!");

    const moradorEscolhido = bancoMoradores[casa][idxMorador];

    localStorage.setItem(`doc_p_${casa}`, doc);
    localStorage.setItem(`foto_p_${casa}`, fotoBase64);

    window.open(`https://wa.me/${moradorEscolhido.tel}?text=Olá ${moradorEscolhido.nome}, sua encomenda (${doc}) chegou!`, '_blank');
    alert("Registrado e aviso enviado!");
    
    document.getElementById('casaEntrada').value = "";
    document.getElementById('docEntrada').value = "";
    document.getElementById('selectMoradorAviso').innerHTML = '<option>Aguardando...</option>';
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

// --- 2. FINALIZAR ENTREGA ---
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

// --- LÓGICA DE ASSINATURA ---
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
        head: [['Casa', 'Morador', 'Nota fiscal', 'Hora', 'Foto', 'Assinatura']],
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