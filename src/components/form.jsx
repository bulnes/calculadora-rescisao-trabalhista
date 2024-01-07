import React from "react";

export default function Form() {
  return (
    <form>
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
                defaultValue={0}
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
              defaultValue={new Date().toISOString().split("T")[0]}
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
              defaultValue={new Date().toISOString().split("T")[0]}
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

            <select className="form-control" id="motivo" required>
              <option value="demissao-comum-acordo">
                Demissão de comum acordo
              </option>
              <option value="dispensa-sem-justa-causa" selected="">
                Dispensa sem justa causa
              </option>
              <option value="dispensa-com-justa-causa">
                Dispensa com justa causa
              </option>
              <option value="pedido-demissao">Pedido de demissão</option>
              <option value="exp-no-prazo">
                Encerramento de contrato de experiência no prazo
              </option>
              <option value="exp-antes-prazo">
                Encerramento de contrato de experiência antes prazo
              </option>
              <option value="aposentadoria">Aposentadoria do empregado</option>
              <option value="falecimento">Falecimento do empregador</option>
            </select>
          </div>
        </div>

        <div className="col-xs-12 col-md-4">
          <div className="form-group">
            <label className="control-label" htmlFor="avisoPrevio">
              Aviso prévio
            </label>

            <select className="form-control" id="avisoPrevio" required>
              <option value="trabalhado">Trabalhado</option>
              <option value="indenizado">Indenizado pelo empregador</option>
              <option value="descumprido">Não cumprido pelo empregado</option>
              <option value="dispensado">Dispensado</option>
            </select>
          </div>
        </div>

        <div className="col-xs-12">
          <div className="checkbox">
            <label>
              <input type="checkbox" name="ferias" /> Possui férias adquiridas
              no ano anterior?
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
              defaultValue={0}
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
                defaultValue={0}
              />
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-4">
          <div className="form-group">
            <label className="control-label" htmlFor="feriasVencidas">
              Férias vencidas
            </label>

            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="feriasVencidas"
                placeholder="0"
                required
                min={0}
                step={1}
                pattern="\d+"
                defaultValue={0}
              />
              <span className="input-group-addon">dias</span>
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
  );
}