"use client"
import { FunctionComponent, useState } from "react"
import styles from "./TitleInput.module.css"
import { ChangeEvent } from "react"

const TitleInput:FunctionComponent = ()=>{
    const [value, setValue] = useState<string>("")

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