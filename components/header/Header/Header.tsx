import { FunctionComponent } from "react"
import styles from "./Header.module.css"
import ManuButton from "../ManuButton/ManuButton"
import Title from "../../global/Title/Title"


const Header: FunctionComponent =  () => (
    <div className={styles.header}>
        <ManuButton/>
        <Title
            title="Notes"
        />
    </div>
)

export default Header