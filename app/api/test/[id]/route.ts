import { NextResponse } from 'next/server' 
import pool from '@/utils/api-utils/pool';
import type { NoteProps } from '@/types/global';
import { Note } from '@/types/data';



export async function GET(req: Request, { params : { id } } : NoteProps) {
    


    const [ data ] : any = await pool.query(
        "SELECT * FROM notes WHERE id = ?",
        [id]
    )
    
    return NextResponse.json(data[0])

}