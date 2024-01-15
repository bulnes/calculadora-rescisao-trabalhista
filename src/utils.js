/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
// Cada ano completo que o empregado tenha, será acrescentado três dias ao aviso prévio
function avisoPrevioIndenizado(dataAdmissao, dataAfastamento, salarioBruto) {
  const admissao = new Date(dataAdmissao);
  const afastamento = new Date(dataAfastamento);

  // Quantidade de anos completos
  const anosCompletos = Math.floor(
    (afastamento - admissao) / 1000 / 60 / 60 / 24 / 365
  );

  // Quantidade de dias de aviso prévio
  const diasAvisoPrevio = 30 + anosCompletos * 3;

  // Valor do aviso prévio
  const valorAvisoPrevio = (salarioBruto / 30) * diasAvisoPrevio;

  return { diasAvisoPrevio, valorAvisoPrevio };
}

// Quantidade de dias do mês de demissão
function diasMesAfastamento(dataAfastamento) {
  const afastamento = new Date(dataAfastamento);

  // Quantidade de dias do mês de demissão
  return new Date(
    afastamento.getFullYear(),
    afastamento.getMonth() + 1,
    0
  ).getDate();
}

// Quantidade de dias trabalhados no mês da demissão
function diasTrabalhadosMesAfastamento(dataAfastamento) {
  const afastamento = new Date(dataAfastamento);

  // Quantidade de dias trabalhados no mês da demissão
  return afastamento.getDate() + 1;
}

// Saldo de Salários (dias trabalhados no mês da demissão)
function saldoDeSalarios(dataAfastamento, salarioBruto) {
  const afastamento = new Date(dataAfastamento);

  // Quantidade de dias do mês de demissão
  const diasMes = diasMesAfastamento(afastamento);

  // Quantidade de dias trabalhados no mês da demissão
  const diasTrabalhados = diasTrabalhadosMesAfastamento(dataAfastamento);

  // Valor do saldo de salários
  return parseFloat(((salarioBruto / diasMes) * diasTrabalhados).toFixed(2));
}

function saldoFamilia(salarioBruto, numDependentesMenores, dataAfastamento) {
  const salarioFamilia = 59.82;
  const salarioTeto = 1754.18;

  if (salarioBruto > salarioTeto) {
    return 0;
  }

  const afastamento = new Date(dataAfastamento);
  const diasAfastamento = diasMesAfastamento(afastamento);
  const diasTrabalhados = diasTrabalhadosMesAfastamento(afastamento);

  const saldoFilhos =
    (salarioFamilia / diasAfastamento) *
    diasTrabalhados *
    numDependentesMenores;

  return parseFloat(saldoFilhos.toFixed(2));
}

function qtdeMesValidosParaDecimoTerceiro(dataAfastamento) {
  const afastamento = new Date(dataAfastamento);

  // Quantidade de dias do mês de demissão
  const diasMes = diasMesAfastamento(afastamento);
  const mesCorrenteValor = diasMes < 15 ? 1 : 0;

  // Quantidade de meses trabalhados
  return afastamento.getMonth() - mesCorrenteValor;
}

function calculaDecimoTerceiroProporcional(salarioBruto, dataAfastamento) {
  const afastamento = new Date(dataAfastamento);
  const mesesTrabalhados = qtdeMesValidosParaDecimoTerceiro(afastamento);

  return parseFloat(((salarioBruto / 12) * mesesTrabalhados).toFixed(2));
}

function calculaDecimoTerceiroIndenizado(
  salarioBruto,
  dataAfastamento,
  dataProjecao
) {
  // Não conta os dias de aviso prévio
  const afastamento = new Date(dataAfastamento);
  const projecao = new Date(dataProjecao);

  const decimoTerceiroAfastamento =
    qtdeMesValidosParaDecimoTerceiro(afastamento);
  const decimoTerceiroProjecao = qtdeMesValidosParaDecimoTerceiro(projecao);

  const mesesValidos = decimoTerceiroProjecao - decimoTerceiroAfastamento;

  return parseFloat(((salarioBruto / 12) * mesesValidos).toFixed(2));
}

function calculoFeriasProporcionais(
  salarioBruto,
  dataAdmissao,
  dataAfastamento
) {
  const admissao = new Date(dataAdmissao);
  const afastamento = new Date(dataAfastamento);

  let ultimaDataParaFerias;
  const periodoFechadoDeTrabalho = admissao;

  while (periodoFechadoDeTrabalho < afastamento) {
    ultimaDataParaFerias = new Date(periodoFechadoDeTrabalho);

    // Adiciona 1 ano no período fechado de trabalho
    periodoFechadoDeTrabalho.setFullYear(
      periodoFechadoDeTrabalho.getFullYear() + 1
    );
  }

  // Quantidade de dias do mês de demissão (último mês trabalhado)
  const qtdeDiasPeriodo =
    (afastamento - ultimaDataParaFerias) / 1000 / 60 / 60 / 24;

  const qtdeMesesPelosDias = Math.ceil(qtdeDiasPeriodo / 30);

  return parseFloat(((salarioBruto / 12) * qtdeMesesPelosDias).toFixed(2));
}

function calculoFeriasIndenizadas(
  salarioBruto,
  dataAdmissao,
  dataAfastamento,
  dataProjecao
) {
  const admissao = new Date(dataAdmissao);
  const afastamento = new Date(dataAfastamento);
  const projecao = new Date(dataProjecao);

  const calcFeriasProporcionais = calculoFeriasProporcionais(
    salarioBruto,
    admissao,
    afastamento
  );
  const calcFeriasIndenizadas = calculoFeriasProporcionais(
    salarioBruto,
    admissao,
    projecao
  );

  return parseFloat(
    (calcFeriasIndenizadas - calcFeriasProporcionais).toFixed(2)
  );
}

function calculoUmTercoFerias(
  valorFeriasVencidas,
  valorFeriasProporcionais,
  valorFeriasIndenizadas
) {
  const feriasBrutas =
    Number(valorFeriasVencidas) +
    Number(valorFeriasProporcionais) +
    Number(valorFeriasIndenizadas);
  const umTerco = Number(feriasBrutas) / 3;

  return parseFloat(umTerco.toFixed(2));
}

function calculoTotalBruto({
  valorAvisoPrevio,
  saldoSalarios,
  saldoSalarioFamilia,
  decimoTerceiroProporcional,
  decimoTerceiroIndenizado,
  valorFeriasVencidas,
  valorFeriasProporcionais,
  valorFeriasIndenizadas,
  umTercoFerias,
}) {
  const totalBruto =
    Number(valorAvisoPrevio) +
    Number(saldoSalarios) +
    Number(saldoSalarioFamilia) +
    Number(decimoTerceiroProporcional) +
    Number(decimoTerceiroIndenizado) +
    Number(valorFeriasVencidas) +
    Number(valorFeriasProporcionais) +
    Number(valorFeriasIndenizadas) +
    Number(umTercoFerias);

  return parseFloat(totalBruto.toFixed(2));
}

function calculoDescontoINSS13Salario(
  decimoTerceiroProporcional,
  decimoTerceiroIndenizado
) {
  const totalDecimoTerceiro =
    Number(decimoTerceiroProporcional) + Number(decimoTerceiroIndenizado);

  if (totalDecimoTerceiro <= 1100) {
    return parseFloat((totalDecimoTerceiro * 0.075).toFixed(2));
  }

  if (totalDecimoTerceiro > 1100 && totalDecimoTerceiro <= 2203.48) {
    return parseFloat((totalDecimoTerceiro * 0.09).toFixed(2));
  }

  if (totalDecimoTerceiro > 2203.48 && totalDecimoTerceiro <= 3305.22) {
    return parseFloat((totalDecimoTerceiro * 0.12).toFixed(2));
  }

  if (totalDecimoTerceiro > 3305.22 && totalDecimoTerceiro <= 6433.57) {
    return parseFloat((totalDecimoTerceiro * 0.14).toFixed(2));
  }

  return 751.99;
}

function calculoDescontoINSSSaldoSalario(saldoSalarios) {
  if (saldoSalarios <= 1100) {
    return parseFloat((saldoSalarios * 0.075).toFixed(2));
  }

  if (saldoSalarios > 1100 && saldoSalarios <= 2203.48) {
    return parseFloat((saldoSalarios * 0.09).toFixed(2));
  }

  if (saldoSalarios > 2203.48 && saldoSalarios <= 3305.22) {
    return parseFloat((saldoSalarios * 0.12).toFixed(2));
  }

  if (saldoSalarios > 3305.22 && saldoSalarios <= 6433.57) {
    return parseFloat((saldoSalarios * 0.14).toFixed(2));
  }

  return 751.99;
}

export default function calcularRescisao({
  salarioBruto,
  dataContratacao,
  dataDemissao,
  ferias,
  numeroDependentes,
  saldoFGTS,
  adiantamentoSalarial,
}) {
  try {
    const admissao = new Date(dataContratacao);
    const afastamento = new Date(dataDemissao);

    // Dias de aviso prévio e o valor do aviso prévio
    const { diasAvisoPrevio, valorAvisoPrevio } = avisoPrevioIndenizado(
      admissao,
      afastamento,
      salarioBruto
    );

    // Data projeção (até quando o funcionário está ligado à empresa)
    const dataProjecao = new Date(afastamento);
    dataProjecao.setDate(dataProjecao.getDate() + diasAvisoPrevio + 1);

    // Saldo de Salários (dias trabalhados no mês da demissão)
    const saldoSalarios = saldoDeSalarios(afastamento, salarioBruto);

    // Saldo de Salário Família (para quem tem filhos menores de 14 anos)
    const saldoSalarioFamilia = saldoFamilia(
      salarioBruto,
      numeroDependentes,
      afastamento
    );

    // 13 salário proporcional
    const decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(
      salarioBruto,
      afastamento
    );

    // 13 salário indenizado
    const decimoTerceiroIndenizado = calculaDecimoTerceiroIndenizado(
      salarioBruto,
      afastamento,
      dataProjecao
    );

    // Férias vencidas
    const valorFerias = ferias ? salarioBruto : 0;
    const valorFeriasVencidas = parseFloat(valorFerias).toFixed(2);

    // Férias proporcionais
    const valorFeriasProporcionais = calculoFeriasProporcionais(
      salarioBruto,
      admissao,
      afastamento
    );

    // Ferias indenizadas
    const valorFeriasIndenizadas = calculoFeriasIndenizadas(
      salarioBruto,
      admissao,
      afastamento,
      dataProjecao
    );

    // Um terço das Férias
    const umTercoFerias = calculoUmTercoFerias(
      valorFeriasVencidas,
      valorFeriasProporcionais,
      valorFeriasIndenizadas
    );

    // Total Bruto
    const totalBruto = calculoTotalBruto({
      valorAvisoPrevio,
      saldoSalarios,
      saldoSalarioFamilia,
      decimoTerceiroProporcional,
      decimoTerceiroIndenizado,
      valorFeriasVencidas,
      valorFeriasProporcionais,
      valorFeriasIndenizadas,
      umTercoFerias,
    });

    // Desconto INSS Saldo de Salario
    const descontoINSSSaldoSalario =
      calculoDescontoINSSSaldoSalario(saldoSalarios);

    // Desconto INSS 13º salário
    const descontoINSS13Salario = calculoDescontoINSS13Salario(
      decimoTerceiroProporcional,
      decimoTerceiroIndenizado
    );

    // Total de descontos
    const totalDescontos = parseFloat(
      (
        Number(descontoINSSSaldoSalario) +
        Number(descontoINSS13Salario) +
        Number(adiantamentoSalarial)
      ).toFixed(2)
    );

    // Total líquido
    const totalLiquido = parseFloat(
      (Number(totalBruto) - Number(totalDescontos)).toFixed(2)
    );

    // FGTS sobre o Saldo de Salário
    const fgts =
      Number(valorAvisoPrevio) +
      Number(saldoSalarios) +
      Number(decimoTerceiroProporcional) +
      Number(decimoTerceiroIndenizado);
    const fgtsDaRescisao = parseFloat((fgts * 0.08).toFixed(2));

    // Montando FGTS
    const montanteFGTS = Number(saldoFGTS) + Number(fgtsDaRescisao);

    // Multa FGTS 40%
    const multaFGTS = parseFloat((montanteFGTS * 0.4).toFixed(2));

    // A receber na CEF
    const totalReceberCEF = parseFloat(
      (Number(montanteFGTS) + Number(multaFGTS)).toFixed(2)
    );

    // Retornar um objeto com os resultados
    return {
      valorAvisoPrevio, // Aviso Prévio Indenizado
      saldoSalarios, // Saldo de Salários
      saldoSalarioFamilia, // Saldo de Salário Família
      decimoTerceiroProporcional, // 13 salário proporcional
      decimoTerceiroIndenizado, // 13 salário indenizado (até a data da projeção)
      valorFeriasVencidas, // Férias vencidas
      valorFeriasProporcionais, // Férias proporcionais
      valorFeriasIndenizadas, // Férias indenizadas (até a data da projeção)
      umTercoFerias, // Um terço das Férias
      totalBruto, // Total Bruto
      descontoINSSSaldoSalario, // Desconto INSS Saldo de Salário
      descontoINSS13Salario, // Desconto INSS 13º salário
      totalDescontos, // Total de descontos
      totalLiquido, // Total líquido
      fgtsDaRescisao, // FGTS que será depositado
      multaFGTS, // Multa FGTS 40%
      totalReceberCEF, // A receber na CEF
    };
  } catch (error) {
    return {
      valorAvisoPrevio: 0,
      saldoSalarios: 0,
      saldoSalarioFamilia: 0,
      decimoTerceiroProporcional: 0,
      decimoTerceiroIndenizado: 0,
      valorFeriasVencidas: 0,
      valorFeriasProporcionais: 0,
      valorFeriasIndenizadas: 0,
      umTercoFerias: 0,
      totalBruto: 0,
      descontoINSSSaldoSalario: 0,
      descontoINSS13Salario: 0,
      totalDescontos: 0,
      totalLiquido: 0,
      fgtsDaRescisao: 0,
      multaFGTS: 0,
      totalReceberCEF: 0,
    };
  }
}
