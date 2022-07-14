import { createContext, useState } from "react";

export const DarkModeContext = createContext(null);

const DarkMode = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    return (
        <DarkModeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkMode;