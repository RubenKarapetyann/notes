import { FunctionComponent } from "react"
import styles from "./BodyInput.module.css"


const BodyInput:FunctionComponent = ()=>{
    return (
        <div className={styles.bodyInputContainer}>
            <textarea
                className={styles.bodyInput}
            />
        </div>
    )
}

export default BodyInput;