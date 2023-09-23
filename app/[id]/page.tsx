import { FunctionComponent } from "react"
import styles from "./page.module.css"
import TitleInput from "@/components/main/TitleInput/TitleInput";


const Note: FunctionComponent = ()=>{
    return (
        <div>
            <TitleInput/>
        </div>
    )
}

export default Note;