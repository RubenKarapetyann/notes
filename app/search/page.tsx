import { Note } from "@/types/data";
import { SearchParamsProps } from "@/types/global";
import getNotes from "@/utils/api-utils/getNotes";


export default async function Search({ searchParams : { query } }: SearchParamsProps){
    const notes: Array<Note> = await getNotes()
    
    
    return (
        <div>{JSON.stringify(notes)}</div>
    )
}