"use client"
import { FunctionComponent } from "react"
import styles from "./Search.module.css"
import { useSearch } from "@/contexts/searchContext/searchContext"
import { ChangeEvent } from "react"

const Search: FunctionComponent = ()=>{
    const { value, changeValue } = useSearch()
    const changeHandle = (e:ChangeEvent<HTMLInputElement>)=>changeValue(e.target.value)
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.searchInput}
                value={value}
                onChange={changeHandle}
            />
        </div>
    )
}

export default Search