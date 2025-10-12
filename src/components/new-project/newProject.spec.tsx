import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ProjectProvider } from "../../contexts/ProjectProvider";
import { ThemeProvider } from "../../contexts/UseTheme";
import { NewProject } from "./newProject";

const renderComponent = () => {
    render(
        <ThemeProvider>
            <ProjectProvider>
                <NewProject opened={mockClose}></NewProject>
            </ProjectProvider>
        </ThemeProvider>

    )
}

const mockClose = jest.fn();

describe("newProject", () => {
    it("deve renderizar corretamente", () => {
        renderComponent();
        expect(screen.getByText('Novo Projeto')).toBeInTheDocument();
    });

    it("deve fechar o componente", async () => {
        renderComponent();
        const closeButton = screen.getByText('Cancelar');
        fireEvent.click(closeButton)
        expect(mockClose).toHaveBeenLastCalledWith(false);
    })

    it("deve validar a quantidade mínima de letras para criar projeto", () => {
        renderComponent();
        const newProjectName = screen.getByPlaceholderText("Nome do projeto")
        fireEvent.input(newProjectName, { target: { value: "ab" } });
        expect(screen.queryByText("O nome precisa ter pelo menos 3 letras.")).toBeInTheDocument();
    })

    it('criar novo projeto', () => {
        renderComponent();
        const newProjectName = screen.getByPlaceholderText("Nome do projeto")
        fireEvent.input(newProjectName, { target: { value: "Teste" } });
        const submitButton = screen.getByText("Criar")
        fireEvent.click(submitButton);
        expect(mockClose).toHaveBeenLastCalledWith(false);
    })

});
