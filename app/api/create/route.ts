import { NextResponse } from "next/server";
import pool from "@/utils/api-utils/pool";

export async function POST(req:Request){
    try{
        const { title, body } = await req.json()
        const date = new Date().getTime()

        await pool.query(
            "INSERT INTO notes(title, body, publicDate, likes, dislikes) VALUES (?,?,?,?,?)",
            [title, body, date, 0, 0]
        )

        return NextResponse.json({message : "ok", access : true, redirect : "/"})
    }catch(err){
        console.log(err)
    }
}