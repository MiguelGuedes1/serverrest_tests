const axios = require('axios');
const fs = require('fs');

async function uploadResults() {
    const client_id = '2AF873226E9F48FA9D1BAC3581BABDDF';
    const client_secret = '122e71386681589f8627556d354e2b33012a7b6a2a94f6ce04188a58d67c2c0b';

    // 1. Autenticar no Xray para obter o Token
    const authToken = await axios.post('https://xray.cloud.getxray.app/api/v2/authenticate', {
        client_id, client_secret
    });
    const token = authToken.data;

    // 2. Ler o ficheiro XML que o Cypress gerou
    const reportData = fs.readFileSync('./cypress/results/results.xml', 'utf-8');

    // 3. Enviar para o Xray
    try {
        const response = await axios.post('https://xray.cloud.getxray.app/api/v2/import/execution/junit?projectKey=ST', reportData, {
            headers: {
                'Content-Type': 'text/xml',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('🚀 Sucesso! Test Execution criada:', response.data.key);
    } catch (error) {
        console.error('❌ Erro no upload:', error.response.data);
    }
}

uploadResults();