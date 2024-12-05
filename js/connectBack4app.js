const Parse = require('parse/node');
// app_ID e Javascript_ID respectivamente
Parse.initialize("HRhl71kGVyIMAN2nMHAaXlTD3WBtpizITlbP5Qxn", "e7LnHDF8sRFdNGVGijHevQ5XmrfCMd4O4xUfELE6"); 
Parse.serverURL = 'https://parseapi.back4app.com/';

// função pra chamar a conexão
// async function chamarContato() {
//     console.log("Chamando a função 'hello'..."); 
//     // o try catch basicamente vai lidar com erros, primeira vez usando mas foi intuitivo
//     // nessa situação é possível usar o if/else, mas ainda sim usaria dentro do try catch
//     try {
//       const response = await Parse.Cloud.run('hello');
//       console.log('Status conexão: ', response);
//     } catch (error) {
//       console.error('Status conexão: ', error);
//     }
//   }
// chamarContato();
// chama a api de dados no back4App
async function chamarAPI() {
  console.log("Chamando a função 'api'..."); 
  try {
    const response = await Parse.Cloud.run('_api');
    console.log('Resposta API: ', response);
  } catch (error) {
    console.error('Erro ao chamar a função no Cloud Code:', error);
  }
}
chamarAPI();