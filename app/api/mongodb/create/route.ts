import { NextResponse } from "next/server";
import mongo from "@/utils/api-utils/mongo";
import { nanoid } from "nanoid";

const cleanUp = () =>{
    mongo.close()
    process.exit()
}

process.on("SIGINT",cleanUp)
process.on("SIGTERM",cleanUp)


export async function POST(req:Request){
    try{
        const { title, body } = await req.json()
        const date = new Date().getTime()
        await mongo.connect()
        const db = mongo.db("notes")
        const collection = db.collection("notes")   
        await collection.insertOne({
            title,
            body,
            publicDate : date,
            likes : 0,
            dislikes : 0,
            id : nanoid(8)
        })

        return NextResponse.json({message : "ok", access : true, redirect : "/"})
    }catch(err){
        console.log(err)
    }
}