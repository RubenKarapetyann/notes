import { MouseEvent, ReactNode } from "react"
import { Note } from "./data"

export type titleProps = {
    title : string,
    size ?: number 
}
export type NoteProps = {
    params : {
        id : string
    }
}
export type SearchParamsProps = {
    searchParams : {
        query : string
    }
}
export type NotesListProps = {
    notes : Array<Note>
}
export type Children = {
    children : ReactNode
}
export interface FormWrapperProps extends Children {
    name : string,
    id? : string | number
}
export type InputProps = {
    initialValue? : string,
}
export type ButtonProps = {
    icon : ReactNode,
    handle? : (e:MouseEvent<HTMLButtonElement>)=>void,
    form? : string | undefined
}