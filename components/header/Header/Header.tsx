import { FunctionComponent } from "react"
import styles from "./Header.module.css"
import ManuButton from "../ManuButton/ManuButton"
import Title from "../../global/Title/Title"
import HeaderFunctional from "../HeaderFunctional/HeaderFunctional"

const Header: FunctionComponent =  () => {
    return (    
        <header className={styles.header}>
            <div className={`${styles.headerSection} ${styles.headerLogo}`}>
                {/* <ManuButton/> */}
                <Title
                    title="Notes"
                />
            </div>
            <HeaderFunctional/>
        </header>
    )
}

export default Header