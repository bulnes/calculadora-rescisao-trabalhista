import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/form.jsx";

import "./styles/style.scss";

const selector = '[data-id="calculadora-rescisao-trabalhista"]';

const App = () => {
  const [hasResult, setHasResult] = React.useState(false);

  return (
    <div className="well well-lg">
      <div className="col-12">
        <h2>Calculadora de Rescisão Trabalhista</h2>
        <hr />
      </div>

      {!hasResult && (
        <div className="col-12">
          <Form />
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.querySelector(selector)).render(<App />);
