# Teste Abertura de empresas

Desafio técnico Vox Tecnologia

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Recomendamos usar a versão LTS do Node.js.

- [Node.js >= 18.x](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Angular CLI >= 16.x](https://www.npmjs.com/package/@angular/cli/v/16.2.0/)

Instale as dependências do projeto:

```bash
npm install
```

## Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
json-server --watch db.json --port 3000
```
Iniciará o json-server para simular a api


```bash
ng serve
```
Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto no navegador através da URL http://localhost:4200

## Linting e Formatação

#### ESLint
ESLint é utilizado para analisar o código e encontrar problemas de linting. Para executar o ESLint no projeto, use:
```bash
npm run lint
```
#### Prettier
Prettier é utilizado para formatar o código de acordo com as regras definidas. Para formatar todo o código no projeto, use:
```bash
npm run format

