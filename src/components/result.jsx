/* eslint-disable react/prop-types */
import React from "react";

export default function Result({ formValues, setHasResult }) {
  function handleComeback() {
    setHasResult(false);
  }

  React.useEffect(() => {
    window.console.log(formValues);
  }, [formValues]);

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
        <h3>Resultado</h3>
      </div>
    </>
  );
}
