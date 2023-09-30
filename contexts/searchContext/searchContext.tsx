"use client"
import { ISearch } from "@/types/context"
import { Children } from "@/types/global"
import { createContext, useState, useContext } from "react"

const SearchContext = createContext<ISearch>({
    value : "",
    changeValue : (text)=>{}
})

function SearchProvider({ children }:Children){
    const [ value, setValue ] = useState<string>("")
    const payload:ISearch = {
        value,
        changeValue : (text)=> setValue(text)
    }
    return (
        <SearchContext.Provider value={payload}>
            {children}
        </SearchContext.Provider>
    )
}
export default SearchProvider

export const useSearch = ():ISearch=> useContext(SearchContext)