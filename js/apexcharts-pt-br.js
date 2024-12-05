
    //   // Organizando os dados de Confirmados
    //   const confirmedData = {
    //       labels: covidData.confirmed.map(item => item.date),
    //       data: covidData.confirmed.map(item => item.value),
    //   };

    //   // Organizando os dados de Mortes
    //   const deathsData = {
    //       labels: covidData.deaths.map(item => item.date),
    //       data: covidData.deaths.map(item => item.value),
    //   };

    //   // Organizando os dados de Vacinados
    //   const vaccinatedData = {
    //       labels: covidData.vaccinated.map(item => item.date),
    //       data: covidData.vaccinated.map(item => item.value),
    //   };

    //   // Gráfico Confirmados
    //   const ctxConfirmed = document.getElementById('grafico1').getContext('2d');
    //   new Chart(ctxConfirmed, {
    //       type: 'line', // Gráfico de linha
    //       data: {
    //           labels: confirmedData.labels,
    //           datasets: [{
    //               label: 'Casos Confirmados',
    //               data: confirmedData.data,
    //               borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
    //               fill: false, // Não preencher a área sob a linha
    //               tension: 0.1, // Suavização das linhas
    //           }],
    //       },
    //       options: {
    //           responsive: true,
    //           scales: {
    //               y: {
    //                   beginAtZero: false,
    //               },
    //           },
    //       },
    //   });

      
 const ctx = document.getElementById('grafico1');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
// function createCharts(data) {
//   const ctxConfirmed = document.getElementById("confirmed-chart");
//   if (ctxConfirmed) {
//       new Chart(ctxConfirmed, {
//           type: "line",
//           data: {
//               labels: data.confirmed?.dates || [],
//               datasets: [{
//                   label: "Confirmados",
//                   data: data.confirmed?.values || [],
//                   borderColor: "blue",
//                   fill: false,
//               }],
//           },
//       });
//   }
// }
// Apex.chart = {
//   locales: [{
//     "name": "pt-br",
//     "options": {
//       "months": [
//         "Janeiro",
//         "Fevereiro",
//         "Março",
//         "Abril",
//         "Maio",
//         "Junho",
//         "Julho",
//         "Agosto",
//         "Setembro",
//         "Outubro",
//         "Novembro",
//         "Dezembro"
//       ],
//       "shortMonths": [
//         "Jan",
//         "Fev",
//         "Mar",
//         "Abr",
//         "Mai",
//         "Jun",
//         "Jul",
//         "Ago",
//         "Set",
//         "Out",
//         "Nov",
//         "Dez"
//       ],
//       "days": [
//         "Domingo",
//         "Segunda",
//         "Terça",
//         "Quarta",
//         "Quinta",
//         "Sexta",
//         "Sábado"
//       ],
//       "shortDays": [
//         "Dom",
//         "Seg",
//         "Ter",
//         "Qua",
//         "Qui",
//         "Sex",
//         "Sab"
//       ],
//       "toolbar": {
//         "exportToSVG": "Baixar SVG",
//         "exportToPNG": "Baixar PNG",
//         "exportToCSV": "Baixar CSV",
//         "menu": "Menu",
//         "selection": "Selecionar",
//         "selectionZoom": "Selecionar Zoom",
//         "zoomIn": "Aumentar",
//         "zoomOut": "Diminuir",
//         "pan": "Navegação",
//         "reset": "Reiniciar Zoom"
//       }
//     }
//   }],
//   defaultLocale: "pt-br
