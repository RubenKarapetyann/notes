"use client"
import { FormWrapperProps } from "@/types/global"
import createNote from "@/utils/api-utils/createNote"
import updateNote from "@/utils/api-utils/updateNote"
import { useRouter } from "next/navigation"
import { FormEvent, FunctionComponent, ReactNode } from "react"

const FormWrapper:FunctionComponent<FormWrapperProps> = ({ children, name, id }:FormWrapperProps)=>{
    const router = useRouter()

    const submitHandle = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const title:any = e.currentTarget.title
        const body:HTMLTextAreaElement = e.currentTarget.body
        if( body.value !== "" ){
            if( id ){
                const res = await updateNote(
                    title.value,
                    body.value,
                    id
                )
                if(res && res.redirect){
                    router.push(res.redirect)
                }
            }else{
                const res = await createNote(title.value,body.value)
                if(res && res.redirect){
                    router.push(res.redirect)
                }
            }
        }
    }

    return (
        <form onSubmit={submitHandle} id={name}>
            {children}
        </form>
    )
}

export default FormWrapper