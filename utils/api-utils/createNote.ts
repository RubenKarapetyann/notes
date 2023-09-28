import endpoints from "@/endpoints/endpoints"
import { postConfig } from "../api-configs/configs"

const createNote = async (title:string, body:string)=>{
    try{
        const response = await fetch(endpoints(null).create,{
            ...postConfig,
            body : JSON.stringify({
                title,body
            })
        })
        const result = await response.json()
        if(response.ok){
            return result
        }
        return false
    }catch(err){
        console.log(err)
    }
}

export default createNote