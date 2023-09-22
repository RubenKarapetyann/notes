import { FunctionComponent } from "react"
import styles from "./ThemeButton.module.css"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeButton: FunctionComponent = ()=>{
    return (
        <div className={styles.themeButtonContainer}>
            <button className={styles.themeButton}>
                <FaMoon/>
            </button>
        </div>
    )
}

export default ThemeButton