import { FunctionComponent } from "react"
import styles from "./Title.module.css"
import type { titleProps } from "@/types/global"


const Title: FunctionComponent<titleProps> = ({ title, size=20 }:titleProps)=>{
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