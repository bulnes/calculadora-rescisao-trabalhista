import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/form.jsx";
import Result from "./components/result.jsx";
import "./styles/style.scss";

const selector = '[data-id="calculadora-rescisao-trabalhista"]';

// const defaultFormData = {
//   salarioBruto: 0,
//   dataContratacao: new Date().toISOString().split("T")[0],
//   dataDemissao: new Date().toISOString().split("T")[0],
//   motivo: "demissao-comum-acordo",
//   avisoPrevio: "trabalhado",
//   ferias: true,
//   numeroDependentes: 0,
//   saldoFGTS: 0,
//   feriasVencidas: 0,
// };

const defaultFormData = {
  salarioBruto: 1450.0, // remuneração mensal
  dataContratacao: new Date("2022-01-10").toISOString().split("T")[0], // admissão
  dataDemissao: new Date("2023-07-05").toISOString().split("T")[0], // afastamento
  motivo: "demissao-comum-acordo", // motivo do afastamento
  avisoPrevio: "indenizado", // tipo do aviso prévio
  ferias: true, // não gozou (férias vencidas, mudar frase no form)
  numeroDependentes: 3, // menores de 14 anos
  saldoFGTS: 2000, // -> não usou
  adiantamentoSalarial: 0,
};
// adantamento salarial (boolean) [usado em desconto valor cheio]
// vale transporte (6% do saldo de salarios), vale refeição (6% do saldo de salarios),

const App = () => {
  const [hasResult, setHasResult] = React.useState(false);
  const [formValues, setFormValues] = React.useState({ ...defaultFormData });

  return (
    <div className="well well-lg">
      {!hasResult && (
        <Form
          formValues={formValues}
          setFormValues={setFormValues}
          setHasResult={setHasResult}
        />
      )}

      {hasResult && (
        <Result formValues={formValues} setHasResult={setHasResult} />
      )}
    </div>
  );
};

ReactDOM.createRoot(document.querySelector(selector)).render(<App />);
