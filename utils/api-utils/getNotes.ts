import endpoints from "@/endpoints/endpoints";
import type { Note } from "@/types/data"

const getNotes = async (query : string = ""): Promise<Array<Note>> =>{
    const response = await fetch(endpoints(null,query).notes,{
        next : {
            // revalidate : 100
        }
    })
    return response.json()
}

export default getNotes;