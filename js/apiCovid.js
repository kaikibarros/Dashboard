
const Chart = require('chart.js/auto');
const Parse = require('parse/node'); // Esta é a versão para o front-end
Parse.initialize("HRhl71kGVyIMAN2nMHAaXlTD3WBtpizITlbP5Qxn", "e7LnHDF8sRFdNGVGijHevQ5XmrfCMd4O4xUfELE6"); 
Parse.serverURL = 'https:bloc//parseapi.back4app.com/';
// Função para buscar dados diretamente do front-end
async function dadosCovid() {
    try {
        const result = await Parse.Cloud.run('dadosCovid'); // Chama a função Cloud no servidor
        console.log(result);
        return result;
    } catch (error) {
        console.error("Erro ao buscar dados do backend:", error);
        return null;
    }
}
// Chame a função
dadosCovid();

const { JSDOM } = require("jsdom");

// Crie o DOM simulado com os elementos necessários
const { document } = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <span id="total-confirmed"></span>
      <span id="total-deaths"></span>
      <span id="info__total--vaccinated-1"></span>
      <span id="info__total--vaccinated-2"></span>
    </body>
  </html>
`).window;


// Função para atualizar os dados na página
async function updatePageData() {
    const data = await dadosCovid();
    console.log(data);
    if (data) {
        // Atualizar valores estáticos
        document.getElementById("total-confirmed").textContent = data.confirmed?.total || 0;
        document.getElementById("total-deaths").textContent = data.deaths?.total || 0;
        document.getElementById("info__total--vaccinated-1").textContent = data.vaccinated?.dose1 || 0;
        document.getElementById("info__total--vaccinated-2").textContent = data.vaccinated?.dose2 || 0;
        
        const { createCanvas } = require('canvas');
        createCharts(data);
        createCanvas(data);
    }
}

// Chame a função de atualização
updatePageData();

const ctxConfirmed = document.querySelector(".data-box--confirmed .data-box__body");

if (ctxConfirmed) {
    new Chart(ctxConfirmed, {
        type: 'line',
        data: {
            labels: data.confirmed?.dates || [],
            datasets: [{
                label: 'Confirmados',
                data: data.confirmed?.values || [],
                borderColor: 'blue',
                fill: false,
            }]
        }
    });
}


// Criar gráficos usando os dados
function createCharts(data) {
    // Confirmados por dia
    new Chart(document.getElementById("confirmed-chart"), {
        type: "line",
        data: {
            labels: data.confirmed?.dates || [],
            datasets: [{
                label: "Confirmados",
                data: data.confirmed?.values || [],
                borderColor: "blue",
                fill: false,
            }],
        },
    });

    // Mortes por dia
    new Chart(document.querySelector(".data-box--deaths .data-box__body"), {
        type: "line",
        data: {
            labels: data.deaths?.dates || [],
            datasets: [{
                label: "Mortes",
                data: data.deaths?.values || [],
                borderColor: "red",
                fill: false,
            }],
        },
    });

    // Outros gráficos podem ser adicionados aqui...
}

// Inicializar a página
updatePageData();

const _ufs = {
    "uf=11": "RO",
    "uf=12": "AC",
    "uf=13": "AM",
    "uf=14": "RR",
    "uf=15": "PA",
    "uf=16": "AP",
    "uf=17": "TO",
    "uf=21": "MA",
    "uf=22": "PI",
    "uf=23": "CE",
    "uf=24": "RN",
    "uf=25": "PB",
    "uf=26": "PE",
    "uf=27": "AL",
    "uf=28": "SE",
    "uf=29": "BA",
    "uf=31": "MG",
    "uf=32": "ES",
    "uf=33": "RJ",
    "uf=35": "SP",
    "uf=41": "PR",
    "uf=42": "SC",
    "uf=43": "RS",
    "uf=50": "MS",
    "uf=51": "MT",
    "uf=52": "GO",
    "uf=53": "DF",
    "brasil=true": "BR"
}

