import NotesList from "@/components/global/NotesList/NotesList";
import { Note } from "@/types/data";
import { SearchParamsProps } from "@/types/global";
import getNotes from "@/utils/api-utils/getNotes";
import styles from "../page.module.css"

export default async function Search({ searchParams : { query } }: SearchParamsProps){
    const notes: Array<Note> = await getNotes(query)
    
    return (
        <div className={styles.homeContainer}>
            <NotesList notes={notes}/>
        </div>
    )
}