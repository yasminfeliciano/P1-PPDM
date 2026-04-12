import React, {useState} from "react";

const CapturaDados = (props) => {
    //aqui vai armazenar o que o usuário digita
    const [inicial, setInicial] = useState(0);
    const [aporte, setAporte] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [periodo, setPeriodo] = useState(0);

    //função para enviar os dados para fazer o cálculo
    const enviar = () => {
        //exibe os dados no console (para verificar se está funcionando)
        console.log({
        inicial,
        aporte,
        taxa,
        periodo
        });
        
        //agora vou fazer o calculo com os numeros convertidos
        //essa função veio do App
        props.onCalcular({
            inicial: Number(inicial),
            aporte: Number(aporte),
            taxa: Number(taxa),
            periodo: Number(periodo)
        });
    };

    return (
        //aqui é onde estão os inputs para pegar os valores da simulação
        <div>
            <h3>Simulação</h3>

            <input className="form-control mb-2" onChange={(e) =>setInicial(e.target.value)} placeholder="Valor Inicial"/>
            <input className="form-control mb-2" onChange={(e) =>setAporte(e.target.value)} placeholder="Valor de Aporte"/>
            <input className="form-control mb-2" onChange={(e) =>setTaxa(e.target.value)} placeholder="Taxa de Juros (%)"/>
            <input className="form-control mb-2" onChange={(e) =>setPeriodo(e.target.value)} placeholder="Período (meses)"/>

            <button className="btn btn-primary w-100" onClick={enviar}>Calcular</button>
        </div>
    );
};
export default CapturaDados;