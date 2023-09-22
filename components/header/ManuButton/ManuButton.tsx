import { FunctionComponent } from "react";
import { FaBars } from "react-icons/fa"
import styles from "./ManuButton.module.css"

const ManuButton: FunctionComponent = ()=>{
    return (
        <div className={styles.manuButtonContainer}>
            <FaBars/>
        </div>
    )
}

export default ManuButton