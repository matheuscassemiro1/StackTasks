import React from "react";
import { Datalist, Input, Option } from "../../styles/global";
import "./taskFilter.css"
export const TaskFilter: React.FC = () => {
    return (
        <>
            <div className="divFilters">
                <div className="topicFilters">
                    <span>PROJETOS</span>
                    <div>
                        <div className="option">Cardboard</div>
                    </div>
                    <span>FILTROS</span>
                    <div>
                        <span className="option">Todas</span>
                        <span className="option">Pendente</span>
                    </div>
                    
                    <div>
                    </div>
                    <span>TAGS</span>
                    <div>
                        <div>tag</div>
                    </div>
                </div>
                <hr />
                <Input list="filtros" placeholder="Sem filtro" value="Ativas" $small></Input>
                <Datalist id="filtros">
                    <Option value="Ativas">Ativas</Option>
                    <Option>Canceladas</Option>
                </Datalist>
            </div>

        </>
    )
}