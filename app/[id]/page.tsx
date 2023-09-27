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

const Note:FunctionComponent<NoteProps> = async ({ params : { id } }: NoteProps)=>{
    const { title, body }:Note = await getNote(id)

    return (
        <div>
            <FormWrapper name={NOTE_FORM} id={id}>
                <TitleInput
                    initialValue={title}
                />
                <BodyInput
                    initialValue={body}
                />
            </FormWrapper>
        </div>
    )
}

export default Note;