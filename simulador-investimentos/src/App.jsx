import React,{useState} from "react";
import CapturaDados from "./CapturaDados";
import ExibeDados from "./ExibeDados";

const App = () => {
    //guarda o resultado final da simulação
    const [resultado, setResultado] = useState(0);

    //função para receber os dados do formulário
    const calcular = (dados) => {
        const{ inicial, aporte, taxa, periodo} = dados;

        let montante = inicial;

        //cálculo dos juros mês a mês
        for(let i=0; i<periodo;i++){
            montante = montante*(1+(taxa/100)) +aporte;
        }

        //cálculo da simulação do investimento
        const totalInvestido = inicial+aporte*periodo;
        const juros = montante-totalInvestido;
        const rentabilidade = (juros/totalInvestido)*100;

        //atualiza o resultado final
        setResultado({
            montante,
            juros,
            rentabilidade,
            aportes: periodo
        });
    };

    //passa a função calcular via props
    //mostra o resultado final
    return(
        <div className="container">
            <h1 className="text-center mt-3">Hello, Investimentos</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <CapturaDados onCalcular={calcular}/>
                </div>
                <div>
                    <ExibeDados resultado={resultado}/>
                    {
                    /*<p>Valor final: R$ {resultado.montante}</p>
                    <p>Juros: R$ {resultado.juros}</p>
                    <p>Rentabilidade: {resultado.rentabilidade}%</p>
                    */
                    }
                </div>
            </div>
        </div>
    );
};

export default App