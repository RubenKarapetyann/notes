import { FunctionComponent } from "react"
import styles from "./Header.module.css"
import ManuButton from "../ManuButton/ManuButton"
import Title from "../../global/Title/Title"
import ThemeButton from "@/components/global/ThemeButton/ThemeButton"


const Header: FunctionComponent =  () => (
    <div className={styles.header}>
        <ManuButton/>
        <Title
            title="Notes"
        />
        <ThemeButton/>
    </div>
)

export default Header