"use client"
import { FunctionComponent } from "react"
import styles from "./Button.module.css"
import { ButtonProps } from "@/types/global"
import { useTheme } from "@/contexts/themeContext/themeContext"

const Button: FunctionComponent<ButtonProps> = ({ icon, handle, form }:ButtonProps)=>{
    const { theme } = useTheme()
    return (
        <div className={styles.ButtonContainer}>
            <button 
                className={`${styles.Button} ${styles[theme]}`}
                onClick={handle}
                form={form}
            >
                {icon}
            </button>
        </div>
    )
}

export default Button