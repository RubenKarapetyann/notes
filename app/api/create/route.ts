import { NextResponse } from "next/server";

export async function POST(req:Request){
    const { title, body } = await req.json()
    console.log(title,body);
    return NextResponse.json({title,body})
}