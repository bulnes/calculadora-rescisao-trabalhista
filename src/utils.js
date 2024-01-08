export default function calcularRescisao({
  salarioBruto,
  dataContratacao,
  dataDemissao,
  motivo,
  avisoPrevio,
  temFeriasAnoAnterior,
  numDependentes,
  saldoFGTS,
  feriasVencidasDias,
}) {
  // Cálculo do tempo de serviço em anos
  const tempoServicoEmAnos =
    (dataDemissao - dataContratacao) / (1000 * 60 * 60 * 24 * 365.25);

  // Cálculo do dia unitário trabalhado
  const diaUnitario = salarioBruto / 30;

  // Inicialização de variáveis
  let avisoPrevioValor = 0;
  let feriasValor = 0;
  let decimoTerceiroProporcional = 0;
  let multaFGTS = 0;

  // Verificar se o mês atual é considerado no cálculo (a partir do décimo quinto dia)
  const considerarMesAtual =
    new Date().getDate() >= 15 &&
    dataDemissao.getMonth() === new Date().getMonth();

  // Dedução do salário baseado no número de dependentes
  // Valor aproximado da dedução do IRPF para 2022
  const salarioDeduzido = salarioBruto - numDependentes * 189.59;

  // Cálculo do aviso prévio
  if (avisoPrevio === "trabalhado") {
    avisoPrevioValor = diaUnitario * considerarMesAtual;
  } else if (avisoPrevio === "indenizado") {
    avisoPrevioValor = salarioDeduzido;
  }

  // Cálculo de férias proporcionais
  if (tempoServicoEmAnos >= 1 || considerarMesAtual) {
    feriasValor =
      diaUnitario * (tempoServicoEmAnos + considerarMesAtual) * 1.33;
    feriasValor += temFeriasAnoAnterior
      ? (diaUnitario / 3) * feriasVencidasDias
      : 0; // Acréscimo de 1/3 para férias proporcionais
  }

  // Cálculo do 13º salário proporcional
  decimoTerceiroProporcional = diaUnitario * tempoServicoEmAnos;

  // Cálculo da multa do FGTS (em caso de demissão sem justa causa)
  if (motivo === "dispensa-sem-justa-causa") {
    multaFGTS = saldoFGTS * 0.4;
  }

  // Total a ser pago ao funcionário
  const totalRescisao =
    salarioDeduzido +
    avisoPrevioValor +
    feriasValor +
    decimoTerceiroProporcional +
    multaFGTS;

  // Retornar um objeto com os resultados
  return {
    avisoPrevio: avisoPrevioValor || 0,
    ferias: feriasValor || 0,
    decimoTerceiro: decimoTerceiroProporcional || 0,
    multaFGTS: multaFGTS || 0,
    totalRescisao: totalRescisao || 0,
  };
}
