# Mony Api 

Portfólio com o objetivo de desenvolver uma Api de organização e controle de finanças pessoais.

## Tecnologias utilizadas

- NodeJS   
- Typescript

## Iniciando o projeto

Para iniciar o projeto, siga os seguintes passos:

- Verifique se possui o NodeJS instalado em sua máquina. Caso não tenha [clique aqui](https://nodejs.org/en/)
- Clone ou faça o download do projeto
- Inicie baixando os pacotes de dependência utilizando `yarn install` ou `npm install`
- Após baixar as dependências, execute `yarn start` ou `npm start`
- O projeto estará rodando no endereço [http://localhost:4000](http://localhost:4000)

## Próximos passos

Acesso:

- Endpoint para criar uma conta, POST: `http://localhost:4000/register`
- Endpoint para logar, POST: `http://localhost:4000/login` 

Inserindo Conquistas e Gastos:

- Endpoint para adicionar uma conquista POST: `http://localhost:4000/gain/save`
- Endpoint para adicionar um gasto POST: `http://localhost:4000/loss/save`

```
{
    "userId":"<id do usuário>",
    "name":"<descrição da informação a ser adicionada>"
    "value":"<valor dessa informação>"
    "month":"<mês>",
    "year":"<ano>"
}
```

- Endpoint para listar todas as conquistas do mês POST: `http://localhost:4000/gain/`
- Endpoint para listar todos os gastos do mês POST: `http://localhost:4000/loss/`

- Endpoint para listar a soma do valor de todas as conquistas do mês POST: `http://localhost:4000/gain/total`
- Endpoint para listar a soma do valor de todos os gastos do mês POST: `http://localhost:4000/loss/total`

```
{
    "userId":"<id do usuário>",
    "month":"<mês>",
    "year":"<ano>"
}
```
Removendo dados:

- Endpoint para remover uma conquista DELETE: `http://localhost:4000/gain/remove/<id do produto>` 
- Endpoint para remover um gasto DELETE: `http://localhost:4000/loss/remove/<id do produto>` 


