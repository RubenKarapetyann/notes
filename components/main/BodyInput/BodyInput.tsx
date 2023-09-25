"use client"
import { ChangeEvent, FunctionComponent, useState } from "react"
import styles from "./BodyInput.module.css"
import { InputProps } from "@/types/global"


const BodyInput:FunctionComponent<InputProps> = ({ initialValue }:InputProps)=>{
    const [value, setValue] = useState<string>(initialValue)

    const changeHandle = (e:ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)
    
    return (
        <div className={styles.bodyInputContainer}>
            <textarea
                className={styles.bodyInput}
                value={value}
                onChange={changeHandle}
            />
        </div>
    )
}

export default BodyInput;