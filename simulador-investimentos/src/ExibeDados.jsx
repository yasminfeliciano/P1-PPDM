import React from "react";

const ExibeDados = (props) => {
  //o resultado são os dados do cálculo
  //o histórico é a lista de simulações anteriores
  const { resultado,historico } = props;

  //Verifica se existe resultado
  if (!resultado || resultado.montante === undefined) {
    return (
      <div className="card p-3">
        <h3 className="h5">Resultado</h3>
        <p className="mb-0">Nenhuma simulação realizada.</p>
      </div>
    );
  }

  //Mostra o resultado
  // mostra o histórico. map percorre o array historico e cria um item para cada simulação
  return (
    <div className="card p-3">
      <h3 className="h5">Resultado</h3>
      <p>Valor final acumulado: R$ {Number(resultado.montante).toFixed(2)}</p>
      <p>Número de aportes: {resultado.aportes}</p>
      <p>Juros acumulados: R$ {Number(resultado.juros).toFixed(2)}</p>
      <p>Rentabilidade: {Number(resultado.rentabilidade).toFixed(2)}%</p>

      <h4 className="h6 mt-3">Histórico</h4>
      {historico.length === 0 ? (
        <p className="mb-0">Sem simulações anteriores.</p>
      ) : (
        <ul className="list-group">
          {historico.map((item, index) => (
            <li key={index} className="list-group-item">
              R$ {Number(item.valor).toFixed(2)} - {item.data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExibeDados;