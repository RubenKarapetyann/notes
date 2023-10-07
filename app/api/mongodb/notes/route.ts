import { NextResponse } from 'next/server' 
import mongo from '@/utils/api-utils/mongo';

export async function GET(request: Request) { 
    try{
        const { searchParams } = new URL(request.url)
        const query = searchParams.get('q')
        await mongo.connect()
        const db = mongo.db("notes")
        const collection = db.collection("notes")
        
        
        if( query ){
          const data = await collection.find({ title : { $regex : query, $options : 'i' } }).toArray()
          return NextResponse.json(data)
        }
      
        const data = await collection.find({}).toArray()        
        
        return NextResponse.json(data)
    }catch(err){
        console.log(err);  
        return NextResponse.json({ error : err })
    }
}