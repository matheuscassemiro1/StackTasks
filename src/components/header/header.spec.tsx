import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ProjectProvider } from "../../contexts/ProjectProvider";
import { ThemeProvider } from "../../contexts/UseTheme";
import { Header } from "./header";


const renderComponent = () => {
    render(
        <ThemeProvider>
            <ProjectProvider>
                <Header></Header>
            </ProjectProvider>
        </ThemeProvider>

    )
}

describe("header", () => {
    it("deve renderizar o componente", () => {
        renderComponent();
        expect(screen.queryByAltText('StackTasks')).toBeInTheDocument();
    })
})