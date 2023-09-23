import { FunctionComponent } from "react"
import styles from "./TitleInput.module.css"

const TitleInput:FunctionComponent = ()=>{
    return (
        <div className={styles.titleInputContainer}>
            <input
                className={styles.titleInput}
                placeholder="title..."
            />
        </div>
    )
}

export default TitleInput