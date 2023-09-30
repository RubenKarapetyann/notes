"use client"
import { Children } from "@/types/global";
import { createContext, useContext, useState } from "react";
import { ITheme } from "@/types/context";
import { DARK, LIGHT } from "@/constants/CONTEXT";

const ThemeContext = createContext<ITheme>({
    theme : LIGHT,
    changeTheme : ()=>{}
})

function ThemeProvider({ children }:Children){
    const [ theme, setTheme ] = useState<string>(LIGHT)

    const payload:ITheme = {
        theme,
        changeTheme : ()=> {
            setTheme(theme=>theme === LIGHT ? DARK : LIGHT)
        }
    }

    return (
        <ThemeContext.Provider value={payload}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

export default ThemeProvider