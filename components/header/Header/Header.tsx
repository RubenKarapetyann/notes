import { FunctionComponent } from "react"
import styles from "./Header.module.css"
import ManuButton from "../ManuButton/ManuButton"
import Title from "../../global/Title/Title"
import HeaderFunctional from "../HeaderFunctional/HeaderFunctional"
import Link from "next/link"

const Header: FunctionComponent =  () => {
    return (    
        <header className={styles.header}>
            <div className={`${styles.headerSection} ${styles.headerLogo}`}>
                {/* <ManuButton/> */}
                <Link href={"/"} className="link">
                    <Title
                        title="Notes"
                    />
                </Link>
            </div>
            <HeaderFunctional/>
        </header>
    )
}

export default Header