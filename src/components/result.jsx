/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React from "react";
import constants from "../contants";
import calcularRescisao from "../utils";

export default function Result({ formValues, setHasResult }) {
  function handleComeback() {
    setHasResult(false);
  }

  const rescisao = calcularRescisao({ ...formValues });

  return (
    <>
      <div className="col-12">
        <p className="text-left">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleComeback}
          >
            Fazer outro cálculo
          </button>
        </p>
        <hr />
      </div>

      <div className="col-12">
        <h3>Meus dados</h3>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Salário bruto</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(formValues.salarioBruto)}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Data contratação</td>
              <td>
                {Intl.DateTimeFormat("pt-BR").format(
                  new Date(formValues.dataContratacao.split("-"))
                )}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Data demissão</td>
              <td>
                {Intl.DateTimeFormat("pt-BR").format(
                  new Date(formValues.dataDemissao.split("-"))
                )}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Motivo</td>
              <td>{constants.motivos[formValues.motivo]}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Aviso prévio</td>
              <td>{constants.avisoPrevio[formValues.avisoPrevio]}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Férias</td>
              <td>{formValues.ferias ? "Sim" : "Não"}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Número de dependentes</td>
              <td>{formValues.numeroDependentes}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Saldo FGTS</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(formValues.saldoFGTS)}
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Adiantamento Salarial</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(formValues.adiantamentoSalarial)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <div className="col-12">
        <h3>Resultado</h3>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aviso Prévio Indenizado</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.valorAvisoPrevio)}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Saldo de Salários</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.saldoSalarios)}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Saldo de Salário Família</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.saldoSalarioFamilia)}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>13º salário proporcional</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.decimoTerceiroProporcional)}
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>13º salário indenizado</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.decimoTerceiroIndenizado)}
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Férias vencidas</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.valorFeriasVencidas)}
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Férias proporcionais</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.valorFeriasProporcionais)}
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Férias indenizadas</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.valorFeriasIndenizadas)}
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>1/3 das Férias</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.umTercoFerias)}
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <strong>Total Bruto</strong>
              </td>
              <td>
                <strong>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(rescisao.totalBruto)}
                </strong>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Desconto INSS Saldo de Salário</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.descontoINSSSaldoSalario)}
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Desconto INSS 13º salário</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.descontoINSS13Salario)}
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Total de descontos</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.totalDescontos)}
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                <strong>Total líquido</strong>
              </td>
              <td>
                <strong>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(rescisao.totalLiquido)}
                </strong>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>FGTS que será depositado</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.fgtsDaRescisao)}
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Multa FGTS 40%</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.multaFGTS)}
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>
                <strong>A receber na C.E.F.</strong>
              </td>
              <td>
                <strong>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(rescisao.totalReceberCEF)}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
