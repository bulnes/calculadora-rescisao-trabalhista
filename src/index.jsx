import React from "react";
import ReactDOM from "react-dom";

import "./styles/style.scss";

const selector = '[data-id="calculadora-rescisao-trabalhista"]';

const App = () => <h1>Hello, React with Webpack!</h1>;

ReactDOM.createRoot(document.querySelector(selector)).render(<App />);
