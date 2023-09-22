import { NextResponse } from 'next/server' 
import pool from '@/utils/api-utils/pool';


export async function GET() { 

  const [ data ] = await pool.query(
    "SELECT * FROM notes"
  )

  console.log(data);
  
  return NextResponse.json({ message : data })
}