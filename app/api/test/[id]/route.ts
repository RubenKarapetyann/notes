// import { NextResponse } from 'next/server' 
// import pool from '@/utils/api-utils/pool';
// import type { NoteProps } from '@/types/global';
// import { Note } from '@/types/data';


// export async function GET(req: Request, { params : { id } } : NoteProps) {
//     try{
//         const [ data ] : any = await pool.query(
//             "SELECT * FROM notes WHERE id = ?",
//             [id]
//         )
        
//         return NextResponse.json(data[0])
//     }catch(err){
//         return NextResponse.json({ message : "false" })
//     }
// }

// export async function PATCH(req: Request) {
//     try{
//         const { id, title, body } = await req.json()
    
//         await pool.query(
//             "UPDATE notes SET title=?, body=? WHERE id = ?",
//             [title,body,id]
//         )
        
//         return NextResponse.json({message : "ok", access : true, redirect : "/"})
        
//     }catch(err){
//         console.log(err)
//         return NextResponse.json({message : "no", access : false, redirect : "/"})
//     }    
// }