import { useState } from "react"
import http from "./http";

const get = () => {

    const [data,setData]        = useState([]);
    const [status,setStatus]    = useState(null);
    const [errors,setErrors]    = useState([]);

    const handlePost = async (url,payload,config=null) => {
        
        try{
            await http.get(url,payload,config)
            .then(response => {
                setStatus(response.status);
                setData(response.data)
            })
            .catch(error => {
                setErrors(error.response?.data);
                setStatus(error.response?.status);
            })
        }catch(error){
            console.log(error)
        }
    }

    return {data,status,errors,handleGet}

}

export default get;