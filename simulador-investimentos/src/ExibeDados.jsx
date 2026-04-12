import React from "react";

const ExibeDados = (props) => {
  const { resultado,historico } = props;

  if (!resultado || resultado.montante === undefined) {
    return (
      <div>
        <h3>Resultado</h3>
        <p>Nenhuma simulação realizada.</p>
      </div>
    );
  }

return (
    <div>
      <h3>Resultado</h3>
      <p>Valor final acumulado: R$ {resultado.montante}</p>
      <p>Número de aportes: {resultado.aportes}</p>
      <p>Juros acumulados: R$ {resultado.juros}</p>
      <p>Rentabilidade: {resultado.rentabilidade}%</p>

      <h4>Histórico</h4>
      <ul className="list-group">
        {historico.map((item, index) =>(
          <li key={index} className="list-group-item">
            R${item.valor}-{item.data}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ExibeDados;