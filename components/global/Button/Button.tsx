import { FunctionComponent } from "react"
import styles from "./Button.module.css"
import { ButtonProps } from "@/types/global"

const Button: FunctionComponent<ButtonProps> = ({ icon, handle }:ButtonProps)=>{
    return (
        <div className={styles.ButtonContainer}>
            <button 
                className={styles.Button}
                onClick={handle}
            >
                {icon}
            </button>
        </div>
    )
}

export default Button