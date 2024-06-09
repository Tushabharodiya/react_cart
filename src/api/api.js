import axios from "axios"
import { base_url } from "../constnt"


let get_Api = async (endpoint) => {
    let res = await axios.get(base_url + endpoint)
    return res;
}

let add_Api=async(endpoint,product)=>{
    let res=await axios.post(base_url+endpoint,product)
    return res;
}

let delete_api=async(endpoint,id)=>{
    let res=await axios.delete(base_url+endpoint,id)
    return res;
}

let update_api=async(endpoint,view)=>{
    let res=await axios.put(base_url+endpoint+`/${view.id}`,view)
    return res;
}

export {get_Api,add_Api,delete_api,update_api}