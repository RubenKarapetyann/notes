import { ReactNode } from "react"

export type titleProps = {
    title : string,
    size ?: number 
}
export type NoteProps = {
    params : {
        id : string
    }
}
export type Children = {
    children : ReactNode
}
export type InputProps = {
    initialValue : string,
}
export type ButtonProps = {
  icon : ReactNode,
  handle : ()=>void
}