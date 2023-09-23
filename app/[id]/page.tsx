import { FunctionComponent } from "react"
import styles from "./page.module.css"
import TitleInput from "@/components/main/TitleInput/TitleInput";
import BodyInput from "@/components/main/BodyInput/BodyInput";


const Note: FunctionComponent = ()=>{
    return (
        <div>
            <TitleInput/>
            <BodyInput/>
        </div>
    )
}

export default Note;