import React, { useEffect, useState } from "react";
import { Button, Input } from "../../styles/global";
import "./newProject.css";
import { ErrorsForm } from "../../types/errorsForm";
import { useProjectContext } from "../../contexts/ProjectProvider";
import { useThemeContext } from "../../contexts/ThemeProvider";


type PassState = {
    opened: (state: boolean) => void;
}
export const NewProject: React.FC<PassState> = ({ opened }) => {
    const [nomeProjeto, setNomeProjeto] = useState<string | undefined>();
    const [formErrors, setFormErrors] = useState<ErrorsForm[]>();
    const [showModalNewProject, setStatusModal] = useState<boolean>(true);
    const { newProject } = useProjectContext();
    const { darkMode } = useThemeContext();

    useEffect(() => {
        opened(showModalNewProject);
    }, [showModalNewProject])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        
        setNomeProjeto(value);

        setFormErrors((prevErrors = []) => {
            const filtered = prevErrors.filter((err) => err.name !== name);
            if (name === 'name' && value.length < 3) {
                filtered.push({ name: 'name', message: 'O nome precisa ter pelo menos 3 letras.' });
            }
            return filtered;
        });
    }

    function validateForm(): boolean {
        let errorsTemp: ErrorsForm[] = [];
        if (!nomeProjeto || nomeProjeto.length < 3) {
            errorsTemp.push({ name: "name", message: "O nome precisa ter pelo menos 3 letras." })
        }
        setFormErrors(errorsTemp);
        return errorsTemp.length <= 0;
    }

    function submitNewProject(event: React.FormEvent): void {
        event?.preventDefault();
        if (validateForm()) {
            newProject(nomeProjeto!);
            setStatusModal(false);
        }
    }


    return <>
        <div className={`div-new-project ${darkMode ? 'dark' : ''} `}>
            <form onSubmit={submitNewProject}>
                <div className="top-div">
                    <span className="title-new-project">Novo Projeto</span>
                    <Button className="close-button" $smaller onClick={() => setStatusModal(false)}>✖</Button>
                </div>
                <div className="input-div">
                    <div className="input-case">
                        <Input className={`${formErrors?.find(e => e.name == 'name') ? 'invalid-input' : ''} ${nomeProjeto && !formErrors?.find(f => f.name == "name") ? 'valid-input' : ''}`} onChange={handleChange} name="name" placeholder="Nome do projeto"></Input>
                        <span className={`${formErrors?.find(e => e.name == 'name') ? 'invalid-icon' : ''} ${nomeProjeto && !formErrors?.find(f => f.name == "name") ? 'valid-icon' : ''}`}></span>
                    </div>
                    {formErrors?.map((erro) => {
                        if (erro.name === 'name') {
                            return <span key={erro.message} className="error-message">{erro.message}</span>
                        }
                    })}
                    <div className="buttons-div">
                        <Button $smaller onClick={() => setStatusModal(false)} type="button">Cancelar</Button>
                        <Button $smaller $primary type="submit">Criar</Button>
                    </div>
                </div>
            </form>
        </div>
    </>
}