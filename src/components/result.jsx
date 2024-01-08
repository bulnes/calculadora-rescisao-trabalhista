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
              <td>Férias vencidas</td>
              <td>{formValues.feriasVencidas} dia(s)</td>
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
              <td>Valor do aviso prévio</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.avisoPrevio)}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Valor das férias</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.ferias)}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Valor do 13º salário</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.decimoTerceiro)}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Valor do FGTS</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.multaFGTS)}
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Valor total da rescisão</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(rescisao.totalRescisao)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
