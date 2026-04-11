import React from "react";

const CapturaDados = () => {
  return (
    <div>
        <h3>Simulação</h3>

        <input className="form-control mb-2" placeholder="Valor Inicial"/>
        <input className="form-control mb-2" placeholder="Valor de Aporte"/>
        <input className="form-control mb-2" placeholder="Taxa de Juros (%)"/>
        <input className="form-control mb-2" placeholder="Período (meses)"/>

        <button className="btn btn-primary w-100">Calcular</button>
    </div>
  );
}
export default CapturaDados;