/* eslint-disable react/prop-types */
import React from "react";
import constants from "../contants";

export default function Form({ formValues, setFormValues, setHasResult }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      salarioBruto: Number(event.target.salarioBruto.value),
      dataContratacao: event.target.dataContratacao.value,
      dataDemissao: event.target.dataDemissao.value,
      motivo: event.target.motivo.value,
      avisoPrevio: event.target.avisoPrevio.value,
      ferias: event.target.ferias.checked,
      numeroDependentes: Number(event.target.numeroDependentes.value),
      saldoFGTS: Number(event.target.saldoFGTS.value),
      adiantamentoSalarial: Number(event.target.adiantamentoSalarial.value),
    };

    setFormValues({ ...formData });
    setHasResult(true);
  }

  return (
    <>
      <div className="col-12">
        <h3>Calculadora de Rescisão Trabalhista</h3>
        <hr />
      </div>

      <div className="col-12">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="salarioBruto">
                  Salário bruto
                </label>

                <div className="input-group">
                  <span className="input-group-addon">R$</span>
                  <input
                    type="number"
                    className="form-control"
                    id="salarioBruto"
                    placeholder="0,00"
                    required
                    min={0}
                    step={1.0}
                    pattern="\d+(\.\d{2})?"
                    defaultValue={formValues.salarioBruto}
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="dataContratacao">
                  Data contratação
                </label>

                <input
                  type="date"
                  className="form-control"
                  id="dataContratacao"
                  placeholder="dd/mm/aaaa"
                  required
                  pattern="\d{2}/\d{2}/\d{4}"
                  min="1950-01-01"
                  defaultValue={formValues.dataContratacao}
                />
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="dataDemissao">
                  Data de demissão
                </label>

                <input
                  type="date"
                  className="form-control"
                  id="dataDemissao"
                  placeholder="dd/mm/aaaa"
                  required
                  pattern="\d{2}/\d{2}/\d{4}"
                  min="1950-01-01"
                  defaultValue={formValues.dataDemissao}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="form-group">
                <label className="control-label" htmlFor="motivo">
                  Motivo
                </label>

                <select
                  className="form-control"
                  id="motivo"
                  required
                  defaultValue={formValues.motivo}
                >
                  {Object.keys(constants.motivos).map((motivo) => (
                    <option key={motivo} value={motivo}>
                      {constants.motivos[motivo]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="avisoPrevio">
                  Aviso prévio
                </label>

                <select
                  className="form-control"
                  id="avisoPrevio"
                  required
                  defaultValue={formValues.avisoPrevio}
                >
                  {Object.keys(constants.avisoPrevio).map((avisoPrevio) => (
                    <option key={avisoPrevio} value={avisoPrevio}>
                      {constants.avisoPrevio[avisoPrevio]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-xs-12">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="ferias"
                    defaultChecked={formValues.ferias}
                  />{" "}
                  Possui férias vencidas
                </label>
              </div>

              <br />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="numeroDependentes">
                  Número de dependentes
                </label>

                <input
                  type="number"
                  className="form-control"
                  id="numeroDependentes"
                  placeholder="0"
                  required
                  min={0}
                  step={1}
                  pattern="\d+"
                  defaultValue={formValues.numeroDependentes}
                />
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="saldoFGTS">
                  Saldo do FGTS
                </label>

                <div className="input-group">
                  <span className="input-group-addon">R$</span>
                  <input
                    type="number"
                    className="form-control"
                    id="saldoFGTS"
                    placeholder="0,00"
                    required
                    min={0}
                    step={1.0}
                    pattern="\d+(\.\d{2})?"
                    defaultValue={formValues.saldoFGTS}
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-4">
              <div className="form-group">
                <label className="control-label" htmlFor="adiantamentoSalarial">
                  Valor adiantamento salarial
                </label>

                <div className="input-group">
                  <span className="input-group-addon">R$</span>
                  <input
                    type="number"
                    className="form-control"
                    id="adiantamentoSalarial"
                    placeholder="0"
                    required
                    min={0}
                    step={1}
                    pattern="\d+"
                    defaultValue={formValues.adiantamentoSalarial}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <p className="text-right">
                <br />

                <button type="submit" className="btn btn-primary btn-lg">
                  Calcular
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
