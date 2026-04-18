# 🚀 ServeRest API Automation: Cypress + Jira Xray + Postman

Este projeto demonstra uma implementação completa de automação de testes de API, integrando ferramentas de execução, exploração e gestão de qualidade (TMS).

## 📋 Cenários de Teste (Issues Jira)
Os testes foram mapeados e executados com base nos seguintes requisitos:
- **ST-1**: [API] Create User - Sucesso no cadastro de novo user com dados válidos.
- **ST-4**: [Negative] Attempt to register a user with an existing email - Validação de regra de negócio para duplicidade.

## 🛠️ Tecnologias e Ferramentas
- **Cypress**: Framework principal para automação de testes de API.
- **Postman**: Utilizado para testes exploratórios e validação manual de endpoints.
- **Jira + Xray**: Gestão do ciclo de vida dos testes (Test Cases, Test Sets e Test Executions).
- **Node.js**: Scripting customizado (`xray-upload.js`) para envio automatizado de resultados via API do Xray.
- **Mocha JUnit Reporter**: Gerador de evidências em formato XML para integração.

## 🏗️ Arquitetura do Projeto
A estrutura foi desenhada para ser independente de massa de dados fixa, utilizando geração de dados dinâmicos

