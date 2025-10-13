import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../contexts/UseTheme";
import { ProjectProvider } from "../../contexts/ProjectProvider";
import { TaskDetail } from "./taskDetail";
import { Task } from "../../types/task";


const mockTaskCreate = jest.fn();
const mockOpened = jest.fn();

const renderComponent = () => {
    render(
        <ThemeProvider>
            <ProjectProvider>
                <TaskDetail opened={mockOpened} taskCreated={mockTaskCreate}></TaskDetail>
            </ProjectProvider>
        </ThemeProvider>

    )
}

describe("TaskDetails", () => {
    it("deve renderizar o componente", () => {
        renderComponent();
        expect(screen.getByText('Titulo')).toBeInTheDocument();
    })

    it("testa validações da task", () => {
        renderComponent();
        const btn = screen.getByText('Salvar')
        fireEvent.click(btn);
        expect(screen.getByText('O nome precisa ter pelo menos 3 letras.')).toBeInTheDocument()
    })

    it("cria uma task", () => {
        renderComponent();
        const name = screen.getByPlaceholderText("Cuidar dos gatos...");
        fireEvent.input(name, { target: { value: "Nome" } });
        const description = screen.getByPlaceholderText("Limpar a caixa de areia e colocar água...");
        fireEvent.input(description, { target: { value: "Descrição" } });
        const date = screen.getByTestId("datepicker");
        fireEvent.input(date, { target: { value: "2025-10-13" } });
        const tags = screen.getByPlaceholderText("urgente,trabalho,comida");
        fireEvent.input(tags, { target: { value: "teste,teste2" } });
        const btn = screen.getByText('Salvar');
        fireEvent.click(btn);
        expect(mockTaskCreate).lastCalledWith(
            {
                "description": "Descrição",
                "limit": "2025-10-13",
                "name": "Nome",
                "tags": ["teste", "teste2"]
            }
        )
        expect(mockOpened).lastCalledWith(false);
    })
})
