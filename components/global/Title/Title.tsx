import { FunctionComponent } from "react"
import styles from "./Title.module.css"
import type { titleProps } from "@/types/global"
// import { Fuggles } from 'next/font/google'

// const fuggles = Fuggles()

const Title: FunctionComponent<titleProps> = ({ title, size=30 }:titleProps)=>{
    return (
        <div>
            <p 
                className={styles.titleText}
                style={{
                    fontSize : size
            }}>
                {title}
            </p>
        </div>
    )
}

export default Title