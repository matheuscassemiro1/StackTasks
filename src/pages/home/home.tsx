import React, { useState } from "react";
import { Header } from "../../components/header/header";
import { TaskFilter } from "../../components/taskFilter/taskFilter";
import "./home.css"
import { Button, Select } from "../../styles/global";

export const Home: React.FC = () => {
    const [mensagem, setMensagem] = useState('');
    const receberDadosDoFilho = (dados: string) => {
        console.log(dados)
        setMensagem(dados);
    };
    return (
        <>
            < Header />
            <div className="content">
                <TaskFilter onSendData={receberDadosDoFilho} />
                <div className="div-projeto">
                    <div className="box-titulo">
                        <h3 className="titulo-tarefas">Lista da Tarefas</h3>
                        <div>
                            <span className="titulo-ordenacao">Ordenar por:</span>
                            <Select className="select-ordenacao" name="ordenacao" id="ordenacao">
                                <option value="data-venc">Data de Vencimento</option>
                            </Select>
                        </div>
                    </div>
                    <div className="div-tarefas">
                        <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Folhas para Impressora</span>
                                <span className="descricao-tarefa">Colocar folhas A4 na impressora</span>
                                <div className="div-flex">
                                    <span className="tag">trabalho</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                        <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                                                <div className="box-tarefa">
                            <input className="checkbox-tarefa" type="checkbox" checked />
                            <div className="detalhes-tarefa">
                                <span className="titulo-descricao">Novo design para o site</span>
                                <span className="descricao-tarefa">Refatorar a parte visual do site</span>
                                <div className="div-flex">
                                    <span className="tag">visual</span>
                                </div>
                            </div>
                            <div className="div-botoes-edicao">
                                <Button $small>Editar</Button>
                                <Button $small>Excluir</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}