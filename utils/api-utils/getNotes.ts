import type { Note } from "@/types/data"

const getNotes = async (): Promise<Array<Note>> =>{
    const response = await fetch(`${process.env.SERVER}/api/test`)
    return response.json()
}

export default getNotes;