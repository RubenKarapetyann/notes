import { NextResponse } from 'next/server' 
import pool from '@/utils/api-utils/pool';


export async function GET(request: Request) { 
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if( !query ){
    const [ data ] = await pool.query(
      "SELECT * FROM notes"
    )
  
    return NextResponse.json(data)
  }

  const [ data ] = await pool.query(
    "SELECT * FROM notes WHERE title REGEXP ?",
    [query]
  )

  return NextResponse.json(data)
}