import endpoints from "@/endpoints/endpoints"
import { updateConfig } from "../api-configs/configs"

const updateNote = async ( title:string, body:string, id:string | number )=>{
    try{
        const response = await fetch(endpoints(id).note,{
            ...updateConfig,
            body : JSON.stringify({
                title, body, id
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

export default updateNote