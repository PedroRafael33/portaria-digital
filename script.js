// 1. BANCO DE DADOS - RESIDENCIAL PATRÍCIA GALVÃO
const bancoMoradores = {
    "01": [{ nome: "VITORIA RUIZ / LEOVAN MACHADO", tel: "5567992310139" }],
    "02": [{ nome: "MARIA ELIANE PEREIRA FIXINO", tel: "5567996411879" }],
    "03": [{ nome: "SONIA PAREDES BARBOZA", tel: "5567996375084" }],
    "04": [{ nome: "CASA 04", tel: "" }],
    "05": [{ nome: "EUNICE DE OLIVEIRA SILVA", tel: "5567992797575" }],
    "06": [{ nome: "ANILTON CARDOSO DA SILVA", tel: "5567992421924" }],
    "07": [{ nome: "ALESSANDRA DOS SANTOS ALVES", tel: "556799823323" }],
    "08": [{ nome: "MARIA APARECIDA DIAS", tel: "5567991279250" }],
    "09": [{ nome: "DENILSON CEZARIO NEPOMUCENO", tel: "5567991163698" }],
    "10": [{ nome: "CASA 10", tel: "" }],
    "11": [{ nome: "CASA 11", tel: "" }],
    "12": [{ nome: "DIEGO DE OLIVEIRA LIMA", tel: "5567992956669" }],
    "13": [{ nome: "CRISTIANE APARECIDA RUFINO MENDES", tel: "5567982130063" }],
    "14": [{ nome: "HILDA NOGUEIRA DA SILVA", tel: "556792162264" }],
    "15": [{ nome: "MARIA ELIANE DA SILVA", tel: "5567998907735" }],
    "16": [{ nome: "HUMBERTO MARTINS PEREIRA", tel: "5567999257743" }],
    "17": [{ nome: "LEONARDO LINS ESTEVAO MORAES", tel: "5567992002107" }],
    "18": [{ nome: "GLADYS DE SOUZA ASSUNCAO", tel: "5567992893775" }],
    "19": [{ nome: "CAROLINA ELIZABETE DA MATA LIMA", tel: "5567991053333" }],
    "20": [{ nome: "ERAILTON ROBERTO PAZ MELGAR", tel: "556792888760" }],
    "21": [{ nome: "JANALUCE BROWN DE ORTIZ", tel: "556792524404" }],
    "22": [{ nome: "ROSIMEIRE MARTINS DA SILVEIRA", tel: "556799235089" }],
    "23": [{ nome: "JESSICA LOIANI SOUZA SANTOS PEREIRA", tel: "5567991857670" }],
    "24": [{ nome: "JAIRO DE OLIVEIRA LIMA / NAYARA ALMEIDA GARCIA", tel: "556792019342" }],
    "25": [{ nome: "GISELE APARECIDA PAVAO GONCALEZ", tel: "556796157909" }],
    "26": [{ nome: "CLEBERSON SILVA DO NASCIMENTO", tel: "556791550769" }],
    "27": [
        { nome: "PEDRO RAFAEL LOPES GARCIA", tel: "5567998878106" },
        { nome: "VALDECY DA SILVA", tel: "5567992277815" }
    ],
    "28": [{ nome: "GISELY DINIZ FERREIRA", tel: "556792514308" }],
    "29": [{ nome: "CELSO BUGATI CABANHA", tel: "5567992436787" }],
    "30": [{ nome: "CASA 30", tel: "" }],
    "31": [{ nome: "EDISON SCHIAVI", tel: "556799063505" }],
    "32": [{ nome: "MARCIANO CREPALDI", tel: "5567996340315" }],
    "33": [{ nome: "ROBINSON ALT", tel: "5567991183939" }],
    "34": [{ nome: "GUSTAVO HENRI COUTO", tel: "556781549700" }],
    "35": [{ nome: "THAIS OLIVEIRA DOS SANTOS", tel: "5567992436787" }],
    "36": [{ nome: "CASA 36", tel: "" }],
    "37": [{ nome: "WALDINEI DE OLIVEIRA CABALLERO", tel: "5567999281255" }],
    "38": [{ nome: "NILSON GREGO", tel: "5567981491127" }],
    "39": [{ nome: "MARCIO GONZALES ESPINDOLA", tel: "556792241343" }],
    "40": [{ nome: "CRISTINA MARIA PEREIRA", tel: "5567991293333" }],
    "41": [{ nome: "THIAGO SOUZA MATTOSO", tel: "556792829496" }],
    "42": [{ nome: "TELMA PEDROGA NOBRE", tel: "556799369454" }],
    "43": [{ nome: "EDMAR SOARES DE ARRUDA", tel: "556796475677" }],
    "44": [{ nome: "EWERTON RODRIGUES FERREIRA", tel: "5567991578080" }],
    "45": [{ nome: "SOLANGE NONATO", tel: "556792211831" }],
    "46": [{ nome: "KLEBER GOMES", tel: "5567999801369" }],
    "47": [{ nome: "KARINE LEMES NABHAN", tel: "556792673755" }],
    "48": [{ nome: "KEILE SANDRA RODRIGUES", tel: "556792252239" }],
    "49": [{ nome: "NILVA ZENIRA LOPES", tel: "556792630618" }],
    "50": [{ nome: "FRANCISCA MIGUEL VICENTE", tel: "556792261881" }],
    "51": [{ nome: "PATRICIA GONCALVES COSTA", tel: "556792692840" }],
    "52": [{ nome: "SIRLEY SOUZA DA CONCEICAO", tel: "556792349061" }],
    "53": [{ nome: "LUIZ CARLOS RIBEIRO", tel: "556799570900" }],
    "54": [{ nome: "MAX DELMIRO ALVES DE SOUZA", tel: "556791299676" }],
    "55": [{ nome: "RICARDO FERREIRA DOS SANTOS", tel: "556791259323" }],
    "56": [{ nome: "HELIO RIBEIRO DE OLIVEIRA", tel: "556781345997" }],
    "57": [{ nome: "CRISTINA ALVES DE ALMEIDA", tel: "556796079206" }],
    "58": [{ nome: "ROBERTO FAGUNDES DE ALMEIDA", tel: "5567999968868" }],
    "59": [{ nome: "ANGELA GOMES MEDEIROS", tel: "556792359507" }],
    "60": [{ nome: "MARCIO FERNANDO DE SOUZA", tel: "556792510652" }],
    "61": [{ nome: "CRISTIANE CAUNETO COINETE", tel: "556792214465" }],
    "62": [{ nome: "VERDISON DE LIMA", tel: "556704399924" }],
    "63": [{ nome: "EDIFICA CONSTRUÇÕES / HUMBERTO", tel: "5567999257743" }],
    "64": [{ nome: "WINSTON LUNA DA COSTA", tel: "556791044164" }],
    "65": [{ nome: "RODRIGO DOS REIS SILVA", tel: "5567996164241" }],
    "66": [{ nome: "DAIANA DA SILVA MENDONÇA", tel: "5567992919465" }],
    "67": [{ nome: "JUSCILAINE CARVALHO CARDOSO", tel: "556792808915" }],
    "68": [{ nome: "MICHEL APARECIDO SALVIANO", tel: "5567999131592" }],
    "69": [{ nome: "ANDRE LUIZ SALES DE LIMA", tel: "556791305184" }],
    "70": [{ nome: "LUDMILA OLIVEIRA DE SOUZA", tel: "5567992972727" }],
    "71": [{ nome: "JOBE SABALA / ANA PAULA", tel: "5567992671712" }],
    "72": [{ nome: "ANDRE FELIPE MANCANEIRA", tel: "556792137161" }],
    "73": [{ nome: "ELAINE AZEVEDO INÁCIO", tel: "556784363312" }],
    "74": [{ nome: "LUCI CORDEIRO DE MACEDO", tel: "5567999838793" }],
    "75": [{ nome: "RAFAEL PEREIRA INACIO", tel: "5567992749809" }],
    "76": [{ nome: "FLAVIO CALADO DA SILVA", tel: "556792862724" }],
    "77": [{ nome: "MARCIO ANTONIO PEREIRA", tel: "556792425373" }],
    "78": [{ nome: "IVANIR DE OLIVEIRA GUARAGNI", tel: "5567991089371" }],
    "79": [{ nome: "SINEIA BARROS XAVIER", tel: "556791128008" }],
    "80": [{ nome: "ALEIXO PARAGUASSU NETO", tel: "5567991767070" }],
    "81": [{ nome: "JOSE GUTENBERG LEITE", tel: "556791084415" }],
    "82": [{ nome: "SUELY LEITE GOMES", tel: "5567991247328" }],
    "83": [{ nome: "ROSANEA SOUZA DA SILVA", tel: "5567996332799" }],
    "84": [{ nome: "MARCIA ORIANA DIAS CLAVICO", tel: "5567922281880" }],
    "85": [{ nome: "MARCIO SEVERIANO DE SOUZA", tel: "556799291800" }],
    "86": [{ nome: "ENNE KETTY COELHO DA SILVA", tel: "556792229806" }],
    "87": [{ nome: "JOSE AUGUSTO RODRIGUES", tel: "556796226838" }],
    "88": [{ nome: "GENIVALDO SANTOS FERREIRA", tel: "556792303005" }],
    "89": [{ nome: "JOAO PAULO SOARES DA SILVA", tel: "556791089371" }],
    "90": [{ nome: "JANAINA CAVANHA LAVOYER", tel: "556799576447" }],
    "91": [{ nome: "CLEONICE PAULO DE OLIVEIRA", tel: "556792695546" }],
    "92": [{ nome: "KELLY CRISTIANE FREITAS", tel: "556792824058" }],
    "93": [{ nome: "WIVIANE APARECIDA SANTOS", tel: "556792123267" }],
    "94": [{ nome: "IGOR DA SILVA CARVALHO", tel: "556791784519" }],
    "95": [{ nome: "JOSE ALBINO LOPES", tel: "556792118292" }],
    "96": [{ nome: "CASA 96", tel: "" }],
    "97": [{ nome: "KLEBER GOMES", tel: "556799980136" }],
    "98": [{ nome: "ANDREIA TALITA DE CAMARGO", tel: "5567992449506" }],
    "99": [{ nome: "VALMOR MENEZES GOMES", tel: "556796253924" }],
    "100": [{ nome: "SILVANA JUBRICA DE CAMPOS", tel: "5567991100930" }],
    "101": [{ nome: "VALERIA GOMES HEMOTO", tel: "5567992018392" }],
    "102": [{ nome: "NEIDE HAIDUCK SILVA", tel: "556791466494" }],
    "103": [{ nome: "MARIA DE FATIMA PEREIRA", tel: "556781770031" }],
    "104": [{ nome: "SILVIA PEIXOTO NANTES", tel: "556792138778" }],
    "105": [{ nome: "ROBSON PAZETO DA SILVA", tel: "5567991167597" }],
    "106": [{ nome: "EVELYN MAYARA SANTANA", tel: "556792675043" }],
    "107": [{ nome: "JOAO BERNALDO DOS SANTOS", tel: "556733972464" }],
    "108": [{ nome: "ELISETE VIEIRA DA SILVA", tel: "556781199321" }],
    "109": [{ nome: "MIRIANI ARAUJO DE SOUZA", tel: "5567991621705" }],
    "110": [{ nome: "ANDERSON ABDOM", tel: "556792791744" }],
    "111": [{ nome: "DIEGO DAVI DA SILVA KLEIN", tel: "5567992472701" }],
    "112": [{ nome: "NADYELLE DEBOLETO OLIVEIRA", tel: "5567999911999" }],
    "113": [{ nome: "CELIA DE OLIVEIRA MACHADO", tel: "556784011103" }],
    "114": [{ nome: "ADELMO TOLEDO LOURENCO", tel: "556792325346" }],
    "115": [{ nome: "CRISTIANO APARECIDO FERREIRA", tel: "556784247612" }],
    "116": [{ nome: "EVA LEMES DO PRADO", tel: "556799044293" }],
    "117": [{ nome: "PAULA REZENDE ALIXANDRE", tel: "556784052178" }],
    "118": [{ nome: "MILTON GOMES MACIEL", tel: "5567991910404" }],
    "119": [{ nome: "GLAZIELEN VILLARRUEL GIRAUD", tel: "556792762212" }],
    "120": [{ nome: "CELIA REGINA VICENTE", tel: "556792862284" }],
    "121": [{ nome: "TAIANE GOMES MUNIZ", tel: "556784216784" }],
    "122": [{ nome: "JUCINEI VILELA", tel: "556781154774" }],
    "123": [{ nome: "LAURA HOLSBACK ALVARENGA", tel: "556792210238" }],
    "124": [{ nome: "ROSEMEIRE ALEGRE DORNELES", tel: "556782243136" }],
    "125": [{ nome: "JACINTO GONZALES", tel: "5567991662510" }],
    "126": [{ nome: "MALVINA APARECIDA RIBOLI", tel: "556799252560" }],
    "127": [{ nome: "EUNICE DA SILVA RODRIGUES", tel: "556796138371" }],
    "128": [{ nome: "MARCELO PEREIRA DOS SANTOS", tel: "" }],
    "129": [{ nome: "RODRIGO KORITIAKI MARQUES", tel: "556792299931" }],
    "130": [{ nome: "MICHEL DA SILVA PEREIRA", tel: "5567992554846" }],
    "131": [{ nome: "CARLOS LUCIANO NOGUEIRA", tel: "556799299383" }],
    "132": [{ nome: "VAGNER OLIVEIRA SILVA", tel: "5567998474379" }],
    "133": [{ nome: "EDINΕΙΑ RITA DOS SANTOS", tel: "5567992403673" }],
    "134": [{ nome: "LEILA ROSA MARTINS", tel: "556791873311" }],
    "135": [{ nome: "ELI SEVERINO VILA NOVA", tel: "556799767898" }],
    "136": [{ nome: "LAIR REGINA DA LUZ", tel: "" }],
    "137": [{ nome: "NELSON CAETANO DA SILVA", tel: "556781614661" }],
    "138": [{ nome: "NEUZA MEIRELLES BENITEZ", tel: "556792182509" }],
    "139": [{ nome: "KELLY CHICRALA MATOS", tel: "556781115523" }],
    "140": [{ nome: "FABIANA SOARES DA SILVA", tel: "556796124242" }],
    "141": [{ nome: "LEANDRO DA SILVA", tel: "556791039143" }],
    "142": [{ nome: "CLAUDIO DA SILVA PIZOLITO", tel: "556792454511" }],
    "143": [{ nome: "MARCOS ANTONIO RAMOS", tel: "556792088361" }],
    "144": [{ nome: "FLAVIO DA SILVA NUNES", tel: "556792300425" }],
    "145": [{ nome: "FRANCISCA DAS CHAGAS", tel: "556792427240" }],
    "146": [{ nome: "CYNTHIA VIEIRA GOMES", tel: "556791287234" }],
    "147": [{ nome: "DARLUCY FERREIRA DOS SANTOS", tel: "556792800513" }],
    "148": [{ nome: "LAELSON DE SOUZA BASTOS", tel: "556781299421" }],
    "149": [{ nome: "CARLA ELIZABETH DA SILVA", tel: "556792350805" }],
    "150": [{ nome: "LEANDRO POMPEO MARTINS", tel: "556791293434" }],
    "151": [{ nome: "VALDECI BATISTA DA SILVA", tel: "5567992149992" }],
    "152": [{ nome: "JACKELINE SOUSA DA SILVA", tel: "556781232984" }],
    "153": [{ nome: "SILVIA VILORDO", tel: "556791509311" }],
    "154": [{ nome: "MAIRA APARECIDA AMARAL", tel: "5567992744815" }],
    "155": [{ nome: "VANESSA CACERES DA SILVA", tel: "5567981841530" }],
    "156": [{ nome: "WILSON DA COSTA", tel: "556796485348" }],
    "157": [{ nome: "JAQUELINE DE LIMA GONCALVES", tel: "5567984058751" }],
    "158": [{ nome: "FERNANDA ALVES DE LIMA", tel: "5567981367262" }],
    "159": [{ nome: "JULIA MARIA FRANCO", tel: "556733268522" }],
    "160": [{ nome: "ISAILSON ALVES DE OLIVEIRA", tel: "556792647720" }],
    "161": [{ nome: "THALITA BORBA BARBOSA", tel: "556792096593" }],
    "162": [{ nome: "GEMIMA PEREIRA DE LIMA", tel: "556792496449" }],
    "163": [{ nome: "WILSON CARDOSO DA CRUZ", tel: "556792277902" }],
    "164": [{ nome: "CORINA ARSENIA ALFONZO REY", tel: "556792081700" }],
    "165": [{ nome: "MARIA DE LOURDES DA SILVA", tel: "556792747076" }]
};

// --- VARIÁVEIS GLOBAIS ---
const canvas = document.getElementById('canvasAssinatura');
const ctx = canvas.getContext('2d');
const video = document.getElementById('video');
let fotosBase64 = []; // Agora guardamos várias fotos em uma lista
let streamCamera = null;

// INICIALIZAÇÃO CORRETA DO QUADRO DE ASSINATURA PARA CELULAR
window.onload = () => {
    carregarHistorico();
    atualizarTabelaPendentes();
    
    // Garante que o quadro de assinatura abra no tamanho ideal da tela
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.lineCap = 'round';
};

// --- FUNÇÕES DE BUSCA DE MORADORES ---
function preencherSelect(casa, idSelect) {
    if (casa.length === 1 && casa !== "0") casa = "0" + casa;
    const select = document.getElementById(idSelect);
    select.innerHTML = '<option value="">Selecione...</option>';
    if (bancoMoradores[casa]) {
        bancoMoradores[casa].forEach((m, i) => {
            const op = document.createElement('option');
            op.value = i; op.text = m.nome;
            select.add(op);
        });
    }
}

document.getElementById('casaEntrada').addEventListener('input', (e) => preencherSelect(e.target.value, 'selectMoradorAviso'));
document.getElementById('confirmarCasa').addEventListener('input', (e) => preencherSelect(e.target.value, 'selectMorador'));


// --- REGISTRO DE CHEGADA E VÍNCULO DAS FOTOS ---
document.getElementById('btnAvisarChegada').addEventListener('click', () => {
    let casa = document.getElementById('casaEntrada').value;
    if (casa.length === 1 && casa !== "0") casa = "0" + casa;
    const docBruto = document.getElementById('docEntrada').value;
    const idx = document.getElementById('selectMoradorAviso').value;

    if (!bancoMoradores[casa] || !docBruto.trim() || idx === "") return alert("Preencha todos os dados da encomenda!");

    const listaDocs = docBruto.split(',').map(d => d.trim()).filter(d => d !== "");
    if(listaDocs.length === 0) return alert("Insira um número válido de documento!");

    // Grava cada documento, associando a foto correta se houver
    listaDocs.forEach((doc, index) => {
        const idUnico = `pendente_${casa}_${Date.now()}_${index}`;
        
        // Se tirou 3 fotos para 3 docs, pega a exata. Se tirou só 1 para todos, usa a mesma.
        let fotoPacote = fotosBase64[index] || ""; 
        if (fotosBase64.length === 1 && listaDocs.length > 1) {
            fotoPacote = fotosBase64[0];
        }

        const dadosEncomenda = { id: idUnico, casa: casa, doc: doc, foto: fotoPacote, moradorIdx: idx };
        localStorage.setItem(idUnico, JSON.stringify(dadosEncomenda));
    });

    const morador = bancoMoradores[casa][idx];
    const textoDocs = listaDocs.join(", ");
    const textoMsg = listaDocs.length > 1 
        ? `Olá ${morador.nome}, chegaram ${listaDocs.length} encomendas (${textoDocs}) na portaria!` 
        : `Olá ${morador.nome}, sua encomenda (${textoDocs}) chegou!`;

    window.open(`https://wa.me/${morador.tel}?text=${encodeURIComponent(textoMsg)}`, '_blank');

    // LIMPA E ZERA ABSOLUTAMENTE TUDO NO CADASTRO E CÂMERA
    document.getElementById('casaEntrada').value = "";
    document.getElementById('docEntrada').value = "";
    document.getElementById('selectMoradorAviso').innerHTML = '<option value="">Digite o nº da casa...</option>';
    
    fotosBase64 = [];
    document.getElementById('fotosContainer').innerHTML = "";
    
    if (streamCamera) {
        streamCamera.getTracks().forEach(track => track.stop());
        streamCamera = null;
    }
    video.style.display = "none";
    document.getElementById('btnTirarFoto').style.display = "none";

    atualizarTabelaPendentes();
});


// --- ATUALIZA A TABELA DE PENDENTES ---
function atualizarTabelaPendentes() {
    const tbody = document.querySelector('#tabelaPendentes tbody');
    if(!tbody) return;
    tbody.innerHTML = "";
    
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith('pendente_')) {
            const item = JSON.parse(localStorage.getItem(chave));
            const linha = tbody.insertRow();
            linha.insertCell(0).innerText = item.casa;
            linha.insertCell(1).innerText = item.doc;
            linha.insertCell(2).innerHTML = `<button onclick="reavisar('${chave}')" style="background:#28a745; color:white; padding:5px; font-size:10px; border-radius:4px;">Reavisar</button>`;
        }
    }
}

function reavisar(chave) {
    const item = JSON.parse(localStorage.getItem(chave));
    const morador = bancoMoradores[item.casa][item.moradorIdx];
    window.open(`https://wa.me/${morador.tel}?text=Lembrete: Sua encomenda (${item.doc}) está na portaria.`, '_blank');
}


// --- FINALIZAR RETIRADA COM TRAVA DE SEGURANÇA ---
document.getElementById('btnFinalizar').addEventListener('click', () => {
    let casa = document.getElementById('confirmarCasa').value;
    if (casa.length === 1 && casa !== "0") casa = "0" + casa;
    const idx = document.getElementById('selectMorador').value;

    if (!casa || idx === "") return alert("Selecione quem está retirando a encomenda!");

    // TRAVA DE SEGURANÇA: EXIGE ASSINATURA ANTES DE FINALIZAR
    if (!temAssinatura) {
        return alert("⚠️ Atenção: A assinatura do morador é obrigatória para finalizar a entrega!");
    }

    let chavesPendentesCasa = [];
    let itensPendentes = [];

    // Busca todas as encomendas daquela casa de uma só vez
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith(`pendente_${casa}_`)) {
            chavesPendentesCasa.push(chave);
            itensPendentes.push(JSON.parse(localStorage.getItem(chave)));
        }
    }

    if (chavesPendentesCasa.length === 0) return alert("Não há encomendas pendentes para esta casa!");

    const assinatura = canvas.toDataURL();
    const nomeRetirante = bancoMoradores[casa][idx].nome;
    const dataHoraRetirada = new Date().toLocaleString('pt-BR');
    
    const registros = JSON.parse(localStorage.getItem('registrosPortaria')) || [];
    
    // Insere no histórico cada pacote separado, mantendo a assinatura em todos
    itensPendentes.forEach(item => {
        registros.push({ 
            casa: casa, 
            nome: nomeRetirante, 
            doc: item.doc, 
            hora: dataHoraRetirada, 
            assinatura: assinatura, 
            foto: item.foto 
        });
    });

    localStorage.setItem('registrosPortaria', JSON.stringify(registros));
    
    // Apaga os pendentes dessa casa
    chavesPendentesCasa.forEach(chave => localStorage.removeItem(chave));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    temAssinatura = false; // RESETA A TRAVA DE ASSINATURA PARA A PRÓXIMA ENTREGA

    document.getElementById('confirmarCasa').value = "";
    document.getElementById('selectMorador').innerHTML = "<option value=''>Aguardando...</option>";
    carregarHistorico();
    atualizarTabelaPendentes();
    
    alert(`${chavesPendentesCasa.length} encomenda(s) entregue(s) com sucesso para a casa ${casa}!`);
});


// --- CARREGAR HISTÓRICO ---
function carregarHistorico() {
    const dados = JSON.parse(localStorage.getItem('registrosPortaria')) || [];
    const tbody = document.querySelector('#tabelaHistorico tbody');
    if(!tbody) return;
    tbody.innerHTML = "";
    
    const dadosInvertidos = [...dados].reverse();

    dadosInvertidos.forEach(item => {
        const linha = tbody.insertRow();
        linha.insertCell(0).innerText = item.casa;
        linha.insertCell(1).innerText = item.nome;
        linha.insertCell(2).innerText = item.doc;
        linha.insertCell(3).innerText = item.hora;
        
        linha.setAttribute('data-assinatura', item.assinatura || "");
        linha.setAttribute('data-foto', item.foto || "");
    });
}


// --- CÂMERA PARA MÚLTIPLAS FOTOS ---
document.getElementById('btnAbrirCamera').addEventListener('click', async () => {
    try {
        streamCamera = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = streamCamera;
        video.style.display = "block";
        document.getElementById('btnTirarFoto').style.display = "block";
    } catch (e) { alert("Câmera não disponível"); }
});

document.getElementById('btnTirarFoto').addEventListener('click', () => {
    const canvasFoto = document.getElementById('canvasFoto');
    canvasFoto.width = 320;
    canvasFoto.height = 240;
    canvasFoto.getContext('2d').drawImage(video, 0, 0, 320, 240);
    const novaFoto = canvasFoto.toDataURL('image/jpeg', 0.5);
    
    fotosBase64.push(novaFoto); // Guarda a foto na lista
    
    // Cria a fotinha miniatura e coloca na tela
    const imgContainer = document.getElementById('fotosContainer');
    const img = document.createElement('img');
    img.src = novaFoto;
    img.style.height = "80px";
    img.style.borderRadius = "8px";
    img.style.border = "1px solid #ccc";
    imgContainer.appendChild(img);
    
    // A câmera continua aberta! Assim você pode tirar 3 fotos seguidas sem apertar mais nada.
});


// --- ASSINATURA TOUCH COM TRAVA DE SEGURANÇA ---
let desenhando = false;
let temAssinatura = false; // VARIÁVEL DE TRAVA 

const obterPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { 
        x: (clientX - rect.left) * scaleX, 
        y: (clientY - rect.top) * scaleY 
    };
};

canvas.addEventListener('mousedown', (e) => { desenhando = true; temAssinatura = true; ctx.beginPath(); const p = obterPos(e); ctx.moveTo(p.x, p.y); });
canvas.addEventListener('mousemove', (e) => { if (!desenhando) return; const p = obterPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); });
window.addEventListener('mouseup', () => desenhando = false);
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); desenhando = true; temAssinatura = true; ctx.beginPath(); const p = obterPos(e); ctx.moveTo(p.x, p.y); });
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (!desenhando) return; const p = obterPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); });

// --- LIMPAR ASSINATURA ---
document.getElementById('btnLimpar').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    temAssinatura = false; // BLOQUEIA NOVAMENTE SE LIMPAR O QUADRO
});


// --- PDF AVANÇADO (CORRIGIDO E SEGURO) ---
document.getElementById('btnPDF').addEventListener('click', () => {
    try {
        const { jsPDF } = window.jspdf;
        const docPDF = new jsPDF();
        
        const linhasVisiveis = [];
        const imagensExtras = [];
        
        // Pega apenas as linhas que estão aparecendo na tabela
        document.querySelectorAll('#tabelaHistorico tbody tr').forEach(tr => {
            if (tr.style.display !== 'none') {
                linhasVisiveis.push([
                    tr.cells[0].innerText, 
                    tr.cells[1].innerText, 
                    tr.cells[2].innerText, 
                    tr.cells[3].innerText, 
                    "", // Espaço para a Foto
                    ""  // Espaço para a Assinatura
                ]);
                
                // Salva a foto e assinatura na mesma ordem exata da tabela
                imagensExtras.push({
                    foto: tr.getAttribute('data-foto'),
                    assinatura: tr.getAttribute('data-assinatura')
                });
            }
        });

        if (linhasVisiveis.length === 0) {
            return alert("Não há registros visíveis para gerar o PDF.");
        }

        docPDF.text("Relatório de Entregas - Patrícia Galvão", 14, 15);
        
        docPDF.autoTable({ 
            startY: 20,
            head: [['Casa', 'Morador', 'Doc', 'Hora', 'Foto', 'Assinatura']], 
            body: linhasVisiveis,
            didDrawCell: (data) => {
                if (data.cell.section === 'body') {
                    // Puxa as imagens corretas daquela linha
                    const img = imagensExtras[data.row.index];
                    
                    try {
                        // Se houver foto, cola como JPEG
                        if (data.column.index === 4 && img.foto && img.foto.includes('data:image')) {
                            docPDF.addImage(img.foto, 'JPEG', data.cell.x + 2, data.cell.y + 2, 15, 12);
                        }
                        // Se houver assinatura, cola como PNG
                        if (data.column.index === 5 && img.assinatura && img.assinatura.includes('data:image')) {
                            docPDF.addImage(img.assinatura, 'PNG', data.cell.x + 2, data.cell.y + 2, 20, 10);
                        }
                    } catch (errImg) {
                        console.log("Aviso: Falha ao desenhar imagem na linha", data.row.index);
                    }
                }
            },
            bodyStyles: { minCellHeight: 18 } 
        });
        
        docPDF.save("relatorio_patricia_galvao.pdf");
    } catch (erroGeral) {
        alert("Erro ao tentar gerar o PDF. Verifique o console.");
        console.error(erroGeral);
    }
});

// --- PESQUISA INTELIGENTE ---
document.getElementById('pesquisarHistorico').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    document.querySelectorAll('#tabelaHistorico tbody tr').forEach(linha => {
        linha.style.display = linha.innerText.toLowerCase().includes(termo) ? "" : "none";
    });
});