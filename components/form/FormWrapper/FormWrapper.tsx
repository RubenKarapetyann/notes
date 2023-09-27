"use client"
import { FormWrapperProps } from "@/types/global"
import updateNote from "@/utils/api-utils/updateNote"
import { FormEvent, FunctionComponent, ReactNode } from "react"

const FormWrapper:FunctionComponent<FormWrapperProps> = ({ children, name, id }:FormWrapperProps)=>{

    const submitHandle = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const title:any = e.currentTarget.title
        const body:HTMLTextAreaElement = e.currentTarget.body
        if( id ){
            updateNote(
                title.value,
                body.value,
                id
            )
        }
    }

    return (
        <form onSubmit={submitHandle} id={name}>
            {children}
        </form>
    )
}

export default FormWrapper