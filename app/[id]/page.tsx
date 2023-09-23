import { FunctionComponent } from "react"
import styles from "./page.module.css"
import TitleInput from "@/components/main/TitleInput/TitleInput";
import BodyInput from "@/components/main/BodyInput/BodyInput";
import type { NoteProps } from "@/types/global";
import getNote from "@/utils/api-utils/getNote";
import { Note } from "@/types/data";

const Note:FunctionComponent<NoteProps> = async ({ params : { id } }: NoteProps)=>{
    const note:Note = await getNote(id)
    return (
        <div>
            {note.title}
            <TitleInput/>
            <BodyInput/>
        </div>
    )
}

export default Note;