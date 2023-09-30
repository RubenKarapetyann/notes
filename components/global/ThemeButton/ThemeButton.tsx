"use client"
import { FunctionComponent } from "react"
import styles from "./ThemeButton.module.css"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "@/contexts/themeContext/themeContext"
import { ITheme } from "@/types/context"

const ThemeButton: FunctionComponent = ()=>{
    const { theme, changeTheme }:ITheme = useTheme()
    
    return (
        <div className={styles.themeButtonContainer}>
            <button className={styles.themeButton} onClick={changeTheme}>
                <FaMoon/>
            </button>
        </div>
    )
}

export default ThemeButton