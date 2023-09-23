import type { Note } from "@/types/data";

const getNote = async ( id:string ) : Promise<Note>=>{
    const response = await fetch(`${process.env.SERVER}/api/test/${id}`)
    return await response.json()
}

export default getNote;