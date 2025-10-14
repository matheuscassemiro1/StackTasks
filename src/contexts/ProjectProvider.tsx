import React, { useContext } from "react";
import { createContext } from "react";
import { useProject } from "../hooks/useProject";

export const ProjectContext = createContext<ReturnType<typeof useProject> | null>(null);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const project = useProject();
    return <>
        <ProjectContext.Provider value={project}>
            {children}
        </ProjectContext.Provider>
    </>
}

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error("useProjectContext must be used within a ProjectProvider");
    return context;
};
