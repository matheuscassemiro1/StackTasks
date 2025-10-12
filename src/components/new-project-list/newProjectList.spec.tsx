import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NewProjectList } from "./newProjectList";
import { ProjectProvider } from "../../contexts/ProjectProvider";
import { ThemeProvider } from "../../contexts/UseTheme";

const renderComponent = () => {
    render(
        <ThemeProvider>
            <ProjectProvider>
                <NewProjectList opened={mockClose} />
            </ProjectProvider>
        </ThemeProvider>

    )
}

const mockClose = jest.fn();

describe("newProjectList", () => {
    it("deve renderizar corretamente", () => {
        renderComponent();
        expect(screen.getByText('Nova lista')).toBeInTheDocument();
    });

    it("deve fechar o componente", async () => {
        renderComponent();
        const closeButton = screen.getByText('Cancelar');
        fireEvent.click(closeButton)
        expect(mockClose).toHaveBeenLastCalledWith(false);
    })

    it("deve validar a quantidade mínima de letras para criar lista", () => {
        renderComponent();
        const newProjectName = screen.getByPlaceholderText("Nome da lista")
        fireEvent.input(newProjectName, { target: { value: "ab" } });
        expect(screen.queryByText("O nome precisa ter pelo menos 3 letras.")).toBeInTheDocument();
    })

    it('criar nova lista', () => {
        renderComponent();
        const newProjectListName = screen.getByPlaceholderText("Nome da lista")
        fireEvent.input(newProjectListName, { target: { value: "Teste" } });
        const submitButton = screen.getByText("Criar")
        fireEvent.click(submitButton);
        expect(mockClose).toHaveBeenLastCalledWith(false);
    })

});
