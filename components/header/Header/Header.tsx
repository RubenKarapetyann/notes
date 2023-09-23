import { FunctionComponent } from "react"
import styles from "./Header.module.css"
import ManuButton from "../ManuButton/ManuButton"
import Title from "../../global/Title/Title"
import ThemeButton from "@/components/global/ThemeButton/ThemeButton"
import Search from "../Search/Search"


const Header: FunctionComponent =  () => (
    <div className={styles.header}>
        <div className={styles.headerSection}>
            {/* <ManuButton/> */}
            <Title
                title="Notes"
            />
        </div>
        <div className={styles.headerSection}>
            <Search/>
            <ThemeButton/> 
        </div>
    </div>
)

export default Header