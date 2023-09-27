import endpoints from "@/endpoints/endpoints";
import type { Note } from "@/types/data";

const getNote = async ( id:string | number ) : Promise<Note>=>{
    const response = await fetch(endpoints(id).note,{
        next : {
            // revalidate : 5
        }
    })
    return await response.json()
}

export default getNote;