import React from "react";
import "./styles.css";
import Cont from './Contador.js';

export default function App() {
  return (
    <div className="App">
      <Cont valorIni={0} />
      <Cont valorIni={10} />
      <Cont valorIni={20} />
    </div>
  );
}
