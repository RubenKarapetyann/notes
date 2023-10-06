"use client"
import { FunctionComponent } from "react"
import styles from "./Title.module.css"
import type { titleProps } from "@/types/global"
import { useTheme } from "@/contexts/themeContext/themeContext"
import { LIGHT } from "@/constants/CONTEXT"
// import { Fuggles } from 'next/font/google'

// const fuggles = Fuggles()

const Title: FunctionComponent<titleProps> = ({ title, size=30 }:titleProps)=>{
    const { theme } = useTheme()
    return (
        <div>
            <p 
                className={styles.titleText}
                style={{
                    fontSize : size,
                    color : theme === LIGHT ? "black" : "white"
            }}>
                {title}
            </p>
        </div>
    )
}

export default Title