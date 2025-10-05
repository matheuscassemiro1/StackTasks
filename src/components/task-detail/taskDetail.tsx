import React, { useEffect, useState } from "react";
import { Button, DefaultDiv, Input } from "../../styles/global";
import "./taskDetail.css"
import { Task } from "../../types/task";
import { ErrorsForm } from "../../types/errorsForm";

type PassState = {
    opened: (state: boolean) => void;
    taskCreated: (task: Partial<Task>) => void;
    finishTaskEdit?: (task: Task) => void;
    setEditTask?: (task?: Task | undefined) => void;
    editTask?: Task
}

export const TaskDetail: React.FC<PassState> = ({ opened, taskCreated, editTask, finishTaskEdit, setEditTask }) => {
    const [status, setStatus] = useState<boolean>(true);
    const [formulario, setFormulario] = useState<Partial<Task>>({
        name: "",
        description: "",
        limit: "",
        tags: [],
    });
    const [formErrors, setFormErrors] = useState<ErrorsForm[]>();

    useEffect(() => {
        opened(status);
        if (editTask) {
            setFormulario(editTask)
        }
    }, [status])

    function handleClose() {
        setFormulario({
            name: "",
            description: "",
            limit: "",
            tags: [],
        });
        setFormErrors([]);
        setStatus(false);
        if(editTask){
            setEditTask!(undefined);  
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        let revisedValue: string | string[] = value;
        if (name === 'tags' && value) {
            let aux = value.replace(/\s/g, '');
            event.target.value = aux;
            revisedValue = aux.split(',');
        }

        setFormulario((previous) => ({ ...previous, [name]: revisedValue }));

        setFormErrors((prevErrors = []) => {
            const filtered = prevErrors.filter((err) => err.name !== name);
            if (name === 'name' && revisedValue.length < 3) {
                filtered.push({ name: 'name', message: 'O nome precisa ter pelo menos 3 letras.' });
            }
            if (name === 'description' && revisedValue.length < 3) {
                filtered.push({ name: 'description', message: 'A descrição precisa ter pelo menos 3 letras.' });
            }
            if (name === 'limit' && !revisedValue) {
                filtered.push({ name: 'limit', message: 'É necessária a data de vencimento.' });
            }
            if (name === 'tags' && !revisedValue) {
                filtered.push({ name: 'tags', message: 'Uma tag é obrigatória.' });
            }
            return filtered;
        });
    }

    function validateForm(): boolean {
        let errorsTemp: ErrorsForm[] = [];
        if (!formulario?.name || formulario.name.length < 3) {
            errorsTemp.push({ name: "name", message: "O nome precisa ter pelo menos 3 letras." })
        }
        if (!formulario?.description || formulario!.description!.length < 3) {
            errorsTemp.push({ name: "description", message: "A descrição precisa ter pelo menos 3 letras." })
        }
        if (!formulario?.limit || !formulario!.limit!) {
            errorsTemp.push({ name: "limit", message: "É necessária a data de vencimento." })
        }
        if (formulario.tags?.length! === 0) {
            errorsTemp.push({ name: "tags", message: "Uma tag é obrigatória." })
        }
        setFormErrors(errorsTemp);
        return errorsTemp.length <= 0;
    }


    function submitForm(e: React.FormEvent): void {
        e.preventDefault();
        if (validateForm()) {
            if (editTask) {
                finishTaskEdit!(formulario as Task);
                handleClose();
            } else {
                taskCreated(formulario);
                handleClose();
            }
        } else {
            console.log("form invalid")
        }
    }

    return (
        <DefaultDiv>
            <form className="form-container" onSubmit={submitForm}>
                <div className="div-top">
                    <h3 className="tab-name">{editTask ? `Editar (#${editTask.id} ${editTask.name})` : 'Nova Tarefa'}</h3>
                    <button className="close-button" onClick={() => { setStatus(false) }}>✖</button>
                </div>

                <div>
                    <span>Titulo</span>
                    <div className="input-case">
                        <Input className={`${formErrors?.find(e => e.name === 'name') ? 'invalid-input' : ''} ${formulario.name && !formErrors?.find(f => f.name === "name") ? 'valid-input' : ''}`} onChange={handleChange} name="name" placeholder="Cuidar dos gatos..." value={formulario.name}></Input>
                        <span className={`${formErrors?.find(e => e.name === 'name') ? 'invalid-icon' : ''} ${formulario.name && !formErrors?.find(f => f.name === "name") ? 'valid-icon' : ''}`}></span>
                    </div>
                    {formErrors?.map((erro) => {
                        if (erro.name === 'name') {
                            return <span key={erro.message} className="error-message">{erro.message}</span>
                        }
                    })}
                </div>
                <div>
                    <span>Descrição</span>
                    <div className="input-case">
                        <Input className={`${formErrors?.find(e => e.name === 'description') ? 'invalid-input' : ''} ${formulario.description && !formErrors?.find(f => f.name === "description") ? 'valid-input' : ''}`} onChange={handleChange} name="description" placeholder="Limpar a caixa de areia e colocar água..." value={formulario.description}></Input>
                        <span className={`${formErrors?.find(e => e.name === 'description') ? 'invalid-icon' : ''} ${formulario.description && !formErrors?.find(f => f.name === "description") ? 'valid-icon' : ''}`}></span>
                    </div>
                    {formErrors?.map((erro) => {
                        if (erro.name === 'description') {
                            return <span key={erro.message} className="error-message">{erro.message}</span>
                        }
                    })}
                </div>
                <div className="details">
                    <div>
                        <span>Vencimento</span>
                        <div className="input-case">
                            <Input className={`${formErrors?.find(e => e.name === 'limit') ? 'invalid-input' : ''} ${formulario.limit && !formErrors?.find(f => f.name === "limit") ? 'valid-input' : ''}`} onChange={handleChange} onInput={handleChange} name="limit" type="date" value={formulario.limit}></Input>
                            <span className={`datepicker ${formErrors?.find(e => e.name === 'limit') ? 'invalid-icon' : ''} ${formulario.limit && !formErrors?.find(f => f.name === "limit") ? 'valid-icon' : ''}`}></span>
                        </div>
                        {formErrors?.map((erro) => {
                            if (erro.name === 'limit') {
                                return <span key={erro.message} className="error-message">{erro.message}</span>
                            }
                        })}
                    </div>
                    <div>
                        <span>Etiquetas (virgula)</span>
                        <div className="input-case">
                            <Input className={`${formErrors?.find(e => e.name === 'tags') ? 'invalid-input' : ''} ${formulario.tags!.length > 0 && !formErrors?.find(f => f.name === "tags") ? 'valid-input' : ''}`} onChange={handleChange} name="tags" placeholder="urgente,trabalho,comida" value={formulario.tags}></Input>
                            <span className={`${formErrors?.find(e => e.name === 'tags') ? 'invalid-icon' : ''} ${formulario.tags!.length > 0 && !formErrors?.find(f => f.name === "tags") ? 'valid-icon' : ''}`}></span>
                        </div>
                        {formErrors?.map((erro) => {
                            if (erro.name === 'tags') {
                                return <span key={erro.message} className="error-message">{erro.message}</span>
                            }
                        })}
                    </div>
                </div>
                <div className="div-botoes">
                    <div className="grupo-botoes">
                        <Button onClick={() => { handleClose() }} type="button">Cancelar</Button>
                        <Button $primary type="submit">Salvar</Button>
                    </div>
                </div>

            </form>
        </DefaultDiv>
    )
}