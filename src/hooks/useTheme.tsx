import { useState } from "react";

export function useTheme() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    function toggleDarkMode(): void{
        setDarkMode(!darkMode);
    }

    return { darkMode, toggleDarkMode }
}