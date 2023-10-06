"use client"
import { FunctionComponent } from "react"
import styles from "./ThemeButton.module.css"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "@/contexts/themeContext/themeContext"
import { ITheme } from "@/types/context"

const ThemeButton: FunctionComponent = ()=>{
    const { theme, changeTheme }:ITheme = useTheme()
    
    const themeHandle = ()=>{
        changeTheme()
        if(document.querySelector("body")?.classList.contains("dark")){
            document.querySelector("body")?.classList.remove("dark")
        }else{
            document.querySelector("body")?.classList.add("dark")
        }
    }
    return (
        <div className={styles.themeButtonContainer}>
            <button className={`${styles.themeButton} ${styles[theme]}`} onClick={themeHandle}>
                <FaMoon/>
            </button>
        </div>
    )
}

export default ThemeButton