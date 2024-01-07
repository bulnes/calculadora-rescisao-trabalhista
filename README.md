# Calculadora de Rescisão Trabalhista

## Descrição do Projeto

O projeto consiste em uma calculadora de rescisão trabalhista, que tem como objetivo calcular o valor da rescisão de um funcionário, de acordo com o tipo de rescisão, o salário do funcionário e o tempo de serviço.

## Rodando o projeto

(1) Instale as dependências do projeto com o comando `npm install` ou `yarn install`.

(2) Inicie o projeto com o comando `npm run dev` ou `yarn dev`.

(3) Acesse o projeto em `http://localhost:9000`.

Obs: O projeto necessita do NodeJS 18.0.0 ou superior.

## Regras de negócio

**Demissão sem justa causa**

- Saldo de salário;
- Férias vencidas (caso tenha) e férias proporcionais com um acréscimo de ⅓;
- 13º salário proporcional;
- Aviso prévio trabalhado ou indenizado;
- Multa rescisória de 40% sobre o valor total depositado do Fundo de Garantia do Tempo de Serviço (FGTS).

Para calcular as ferias e os décimos terceiros proporcionais, o Dev devera dividir o valor do salario por 12, e ir incluindo uma cota para cada mês trabalhado.

As férias são adquiridas a partir do primeiro ano de trabalho completo e devem ser contabilizadas da data da entrada.

As proporcionais não, e detem um terço.

O décimo terceiro é adquirido mês a mês, e contabilizado pelo período trabalhado no primeiro ano, e a partir de 01/01 do ano corrente apos o recebimento do primeiro decimo terceiro.

O aviso prévio indenizado soma um salário de indenização.

O aviso prévio trabalhado, é convertido em saldo de dias trabalhados, e a rescisão não tem indenização.

O saldo de salário é o valor do dia unitario trabalhado.

O dia unitário de trabalhado e obtido dividindo o salario por 30.

Para se obter a estimativa do valor depositado no fundo de garantia o dev, deverá dividir um salário por 12 e incluir uma cota para cada mês que o funcionário trabalhou até o dia 15.

Para considerar um mes trabalhado para décimo terceiro e ferias, também se aplica a regra do mes trabalhado até o dia 15.

**Demissão com justa causa**

- Saldo de salário;
- Férias vencidas (caso tenha) e acréscimo de ⅓;.

Para calculo de ferias pode usar a mesma lógica da demissão sem justa causa.

**Pedido de demissão**

- Saldo de salário;
- 13º salário proporcional;
- Férias vencidas (caso tenha) e férias proporcionais com um acréscimo de ⅓;

Apenas a título de curiosidade, o funcionário que para de trabalhar imediatamente a realizar o pedido de demissão, pode ter, também, o aviso prévio desconta de suas verbas rescisórias.

**Pontos de atenção**

O mês de trabalho é contabilizado a partir do decimo quinto dia trabalhado.

Na demissão por justa causa não se pagam as férias proporcionais, apenas as vencidas.

No pedido de demissão, o funcionário pode ter o valor do aviso prévio descontado de suas verbas.
