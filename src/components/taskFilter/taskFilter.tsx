import React from "react";
import "./taskFilter.css"

type Tarefas = {
  onSendData: (dados: string) => void;
};

export const TaskFilter: React.FC<Tarefas> = ({ onSendData }: Tarefas) => {

    function enviarDadosPai(): void{
        onSendData("teste");
    }

    return (
        <>
            <div className="divFilters">
                <div className="topicFilters">
                    <span>PROJETOS</span>
                    <div>
                        <div className="option option-selected" onClick={enviarDadosPai}>Cardboard</div>
                    </div>
                    <span>FILTROS</span>
                    <div>
                        <span className="filter filter-selected">Todas</span>
                        <span className="filter">Pendente</span>
                    </div>
                    
                    <div>
                    </div>
                    <span>ETIQUETAS</span>
                    <div className="div-flex">
                        <div>
                            <span className="tag">trabalho</span>
                        </div>
                    </div>
                </div>
                <hr />
             
            </div>

        </>
    )
}