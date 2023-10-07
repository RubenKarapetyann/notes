import { FunctionComponent } from "react"
import styles from "./page.module.css"
import TitleInput from "@/components/main/TitleInput/TitleInput";
import BodyInput from "@/components/main/BodyInput/BodyInput";
import type { NoteProps } from "@/types/global";
import getNote from "@/utils/api-utils/getNote";
import { Note } from "@/types/data";
import FormWrapper from "@/components/form/FormWrapper/FormWrapper";
import { NOTE_FORM } from "@/constants/global/FORM";
import updateNote from "@/utils/api-utils/updateNote";

export const dynamic = 'force-dynamic'

const Note:FunctionComponent<NoteProps> = async ({ params : { id } }: NoteProps)=>{
    const note:Note = await getNote(id)

    if(!note){
        return <p>not found</p>
    }

    return (
        <div>
            <FormWrapper name={NOTE_FORM} id={id}>
                <TitleInput
                    initialValue={note.title}
                />
                <BodyInput
                    initialValue={note.body}
                />
            </FormWrapper>
        </div>
    )
}

export default Note;