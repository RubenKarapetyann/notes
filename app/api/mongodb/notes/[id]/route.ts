import { NextResponse } from 'next/server' 
import mongo from '@/utils/api-utils/mongo';
import type { NoteProps } from '@/types/global';
import { Note } from '@/types/data';

const cleanUp = () =>{
    mongo.close()
    process.exit()
}

process.on("SIGINT",cleanUp)
process.on("SIGTERM",cleanUp)


export async function GET(req: Request, { params : { id } } : NoteProps) {
    try{
        await mongo.connect()
        const db = mongo.db("notes")
        const collection = db.collection("notes")      
        const data = await collection.findOne({ id })

        return NextResponse.json(data)
    }catch(err){
        return NextResponse.json({ message : "false" })
    }
}

export async function PATCH(req: Request) {
    try{
        const { id, title, body } = await req.json()
    
        await mongo.connect()
        const db = mongo.db("notes")
        const collection = db.collection("notes")    
        collection.updateOne({ id }, { $set : { title, body } })  

        return NextResponse.json({message : "ok", access : true, redirect : "/"})
        
    }catch(err){
        console.log(err)
    }    
}