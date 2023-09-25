"use client"
import { FunctionComponent, useState } from "react"
import styles from "./TitleInput.module.css"
import { ChangeEvent } from "react"
import { InputProps } from "@/types/global"

const TitleInput:FunctionComponent<InputProps> = ({ initialValue }:InputProps)=>{
    const [value, setValue] = useState<string>(initialValue)

    const changeHandle = (e:ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <div className={styles.titleInputContainer}>
            <input
                className={styles.titleInput}
                placeholder="title..."
                value={value}
                onChange={changeHandle}
                name="title"
            />
        </div>
    )
}

export default TitleInput