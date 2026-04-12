import React, {useState} from "react";

const CapturaDados = (props) => {
    const [inicial, setInicial] = useState(0);
    const [aporte, setAporte] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [periodo, setPeriodo] = useState(0);

    const enviar = () => {
        console.log({
        inicial,
        aporte,
        taxa,
        periodo
        });
        
        props.setDados({
            inicial: Number(inicial),
            aporte: Number(aporte),
            taxa: Number(taxa),
            periodo: Number(periodo)
        });
    };

    return (
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