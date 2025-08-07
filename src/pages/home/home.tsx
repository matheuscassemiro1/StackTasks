import React from "react";
import { Header } from "../../components/header/header";
import { TaskFilter } from "../../components/taskFilter/taskFilter";
import "./home.css"

export const Home: React.FC = () => {
    return (
        <>
            < Header />
            <div className="content">
                <TaskFilter />
                <span>content</span>
            </div>
        </>
    )
}