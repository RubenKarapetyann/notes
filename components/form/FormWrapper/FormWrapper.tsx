"use client"
import { FormWrapperProps } from "@/types/global"
import { FormEvent, FunctionComponent, ReactNode } from "react"

const FormWrapper:FunctionComponent<FormWrapperProps> = ({ children, name }:FormWrapperProps)=>{

    const submitHandle = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()                
    }

    return (
        <form onSubmit={submitHandle} id={name}>
            {children}
        </form>
    )
}

export default FormWrapper