import React,{useState} from "react";
import CapturaDados from "./CapturaDados";
import ExibeDados from "./ExibeDados";

const App = () => {
    //guarda o resultado final da simulação
    const [resultado, setResultado] = useState(0);
    //guarda o histórico da simulação
    const [historico, setHistorico] = useState([])

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

        //setHistorico com concat
        /*setHistorico((prevHistorico) =>
            //cria um novo array com um item novo na primeira posição
            [
                {
                    valor: montante,
                    data:new Date().toLocaleString()
                }
            //concatena o novo array com o histórico anterior
            ].concat(prevHistorico)
        );*/

        //setHistorico com Array
        setHistorico((prevHistorico=[]) =>
            {
                //cria um array vazio para o novo historico
                const novoHistorico = [];
                                
                //cria o novo item
                const novoItem={
                    valor:montante,
                    data:new Date().toLocaleString()
                }

                //adiciona o novo item na primeira posição
                novoHistorico[0] = novoItem;

                //copia os itens antigos a partir da posição 1
                for(let i=0;i<prevHistorico.length;i++){
                    novoHistorico[i+1]=prevHistorico[i];
                }

                return novoHistorico;
            }
        );
    };

    //Limpa o historico
    const limpar = () =>{
        setResultado(0);
        setHistorico([]);
    }

    //passa a função calcular via props
    //mostra o resultado final + histórico
    return(
        <div className="container">
            <h1 className="text-center mt-3">Hello, Investimentos</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <CapturaDados onCalcular={calcular} onLimpar={limpar}/>
                </div>
                <div className="col-md-6">
                    <ExibeDados resultado={resultado} historico={historico}/>
                </div>
            </div>
        </div>
    );
};

export default App