# zenvia-sms-massive

Este repositório contém a aplicação criada no artigo tutorial da [Prensa.li](https://prensa.li/) sobre como [enviar SMS em massa](https://prensa.li/zenvia/).

## Como executar

### Cofiguração inicial

Para executar esta aplicação você precisa fazer o cadastro no [site da API](https://accounts.zenvia.com/login?state=g6Fo2SBQOE5IS2lVazY0RzZROVA5RU9weXRScERpVHNPSldJMaN0aWTZIEM1amFNaTdPNTFHckRsR25PeE1iZkZDQk14Mm1XWTlDo2NpZNkga0xtSkFodXlRTUFHRUd2T1JFRjVQMTM1TzZhUW13ZlY&client=kLmJAhuyQMAGEGvOREF5P135O6aQmwfV&protocol=oauth2&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=VWtqSWRBU3dHUXZ0SlJmaVlRdDg2WVBnMUN0N3N5cXViNFo1TF9taGgzSA%3D%3D&redirect_uri=https%3A%2F%2Fapp.zenvia.com%3Fauth0Redirect%3Dnotifications%2Fhome%2F&code_challenge=x2eZERrs-_huPtU1wsFJf0OdLeoWPna_O63i1jU6imY&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMTIuMSJ9), acessar o _Sandbox_, configurar o ambiente de testes, cadastrando o seu número de celular e pegando seu _API-TOKEN_ para se autenticar nas requisições à API.

Com o _API-TOKEN_ em mãos, renomeie o arquivo [`.env.example`](./.env.example) para `.env` e coloque o token na variável `API_TOKEN` e também coloque a sua _KEYWORD_ configurada para seu ambiente de testes.

### Requisitos

- [node.js](https://nodejs.org/en/download/) 8 ou versão superior
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (opcional, mas altamente recomendado)

Para instalar o [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable), basta rodar em algum terminal:

```bash
npm install -g yarn
```

### Executando o projeto

Clone o projeto

```bash
git clone https://github.com/apiplaybook/zenvia-sms-massive.git
```

Após clonar o projeto e fazer as configurações necessárias, dentro da pasta, abra um terminal e execute:

```bash
yarn dev
```

ou

```bash
npm run dev
```
