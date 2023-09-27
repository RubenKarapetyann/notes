import endpoints from "@/endpoints/endpoints"
import { updateConfig } from "../api-configs/configs"

const updateNote = async ( title:string, body:string, id:string | number )=>{
    try{
        const response = await fetch(endpoints(id).note,{
            ...updateConfig,
            body : JSON.stringify({
                title, body, id
            }),
            next : {
                // revalidate : 5
            }
        })
        const result = await response.json()
        if(response.ok){
            return result            
        }
        return false
    }catch(err){
        console.log(err)
        return false
    }
}

export default updateNote