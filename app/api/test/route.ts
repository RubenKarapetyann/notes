import { NextResponse } from 'next/server' 
import pool from '@/utils/api-utils/pool';


export async function GET() { 

  const [ data ] = await pool.query(
    "SELECT * FROM notes"
  )

  
  return NextResponse.json(data)
}