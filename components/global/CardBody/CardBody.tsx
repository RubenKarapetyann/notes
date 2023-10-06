"use client"
import { useTheme } from "@/contexts/themeContext/themeContext"
import styles from "./CardBody.module.css"

const CardBody = ({ text }:{ text : string })=>{
    const { theme } = useTheme()
    return (
        <p className={`${styles.cardText} ${styles[theme]}`}>
            {text}
        </p>
    )
}

export default CardBody