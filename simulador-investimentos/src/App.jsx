import React from "react";
import CapturaDados from "./CapturaDados";

const App = () => {
    return(
        <div className="container">
            <h1 className="text-center mt-3">Hello, Investimentos</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <CapturaDados/>
                </div>
            </div>
        </div>
    );
}

export default App