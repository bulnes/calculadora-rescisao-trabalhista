import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./components/form.jsx";
import Result from "./components/result.jsx";
import "./styles/style.scss";

const selector = '[data-id="calculadora-rescisao-trabalhista"]';

const defaultFormData = {
  salarioBruto: 0,
  dataContratacao: new Date().toISOString().split("T")[0],
  dataDemissao: new Date().toISOString().split("T")[0],
  motivo: "demissao-comum-acordo",
  avisoPrevio: "trabalhado",
  ferias: true,
  numeroDependentes: 0,
  saldoFGTS: 0,
  feriasVencidas: 0,
};

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
