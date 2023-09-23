import { FunctionComponent } from "react"
import styles from "./Search.module.css"

const Search: FunctionComponent = ()=>{
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.searchInput}
            />
        </div>
    )
}

export default Search