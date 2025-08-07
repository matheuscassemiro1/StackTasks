import React from "react";
import { Datalist, Input, Option } from "../../styles/global";

export const TaskFilter: React.FC = () => {
    return (
        <>
            <div>
                <span><i>Filtro</i></span>
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