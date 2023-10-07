"use client"
import { FormEvent, FunctionComponent, useState } from "react"
import styles from "./Search.module.css"
import { ChangeEvent } from "react"
import { useRouter } from "next/navigation"

const Search: FunctionComponent = ()=>{
    const [ value, changeValue ] = useState<string>("")
    const router = useRouter()
    const changeHandle = (e:ChangeEvent<HTMLInputElement>)=>changeValue(e.target.value)

    const submitHandle = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!value){
            return router.push("/")
        }
        router.push(`/search/?query=${value}`)
    }

    return (
        <form className={styles.searchContainer} onSubmit={submitHandle}>
            <input
                className={styles.searchInput}
                value={value}
                onChange={changeHandle}
            />
        </form>
    )
}

export default Search