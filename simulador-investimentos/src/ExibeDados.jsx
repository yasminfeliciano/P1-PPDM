import React from "react";

const ExibeDados = (props) => {
  //o resultado são os dados do cálculo
  //o histórico é a lista de simulações anteriores
  const { resultado,historico } = props;

  //Verifica se existe resultado
  if (!resultado || resultado.montante === undefined) {
    return (
      <div>
        <h3>Resultado</h3>
        <p>Nenhuma simulação realizada.</p>
      </div>
    );
  }

  //Mostra o resultado
  // mostra o histórico. map percorre o array historico e cria um item para cada simulação
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