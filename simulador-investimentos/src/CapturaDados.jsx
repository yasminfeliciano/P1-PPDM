import React, {useState} from "react";

const CapturaDados = (props) => {
    //aqui vai armazenar o que o usuário digita
    const [inicial, setInicial] = useState("");
    const [aporte, setAporte] = useState("");
    const [taxa, setTaxa] = useState("");
    const [periodo, setPeriodo] = useState("");

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

    //essa função limpa todos os campos 
    const limparCampos = ()=>{
        setInicial("");
        setAporte("");
        setTaxa("");
        setPeriodo("");

        //Optamos por separar a limpeza dos campos da limpeza do histórico, mas poderia estar junto
        //props.onLimpar();
    }

    //Essa função limpa o histórico de sumulações
    const limparHistorico =()=>{
        props.onLimpar();
    }

    return (
        //aqui é onde estão os inputs para pegar os valores da simulação ou limpar tudo
        <div>
            <h3>Simulação</h3>

            <input className="form-control mb-2" value={inicial} onChange={(e) =>setInicial(e.target.value)} placeholder="Valor Inicial"/>
            <input className="form-control mb-2" value={aporte} onChange={(e) =>setAporte(e.target.value)} placeholder="Valor de Aporte"/>
            <input className="form-control mb-2" value={taxa} onChange={(e) =>setTaxa(e.target.value)} placeholder="Taxa de Juros (%)"/>
            <input className="form-control mb-2" value={periodo} onChange={(e) =>setPeriodo(e.target.value)} placeholder="Período (meses)"/>
            <div>
                <button className="btn btn-primary" onClick={enviar}>Calcular</button>
                <button className="btn btn-outline-danger" onClick={limparCampos}>Limpar Campos</button>
                <button className="btn btn-outline-danger" onClick={limparHistorico}>Limpar Histórico</button>
            </div>
           
        </div>
    );
};
export default CapturaDados;