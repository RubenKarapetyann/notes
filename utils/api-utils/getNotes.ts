import endpoints from "@/endpoints/endpoints";
import type { Note } from "@/types/data"

const getNotes = async (): Promise<Array<Note>> =>{
    const response = await fetch(endpoints(null).notes,{
        next : {
            // revalidate : 100
        }
    })
    return response.json()
}

export default getNotes;