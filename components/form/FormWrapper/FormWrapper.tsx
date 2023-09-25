"use client"
import { Children } from "@/types/global"
import { FormEvent, FunctionComponent, ReactNode } from "react"

const FormWrapper:FunctionComponent<Children> = ({ children }:Children)=>{

    const submitHandle = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandle}>
            {children}
        </form>
    )
}

export default FormWrapper