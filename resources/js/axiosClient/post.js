import { useState } from "react"
import http from "./http";

const post = () => {

    const [data,setData]        = useState([]);
    const [status,setStatus]    = useState(null);
    const [errors,setErrors]    = useState([]);

    const handlePost = async (url,payload,config=null) => {
        
        try{
            await http.post(url,payload,config)
            .then(response => {
                setStatus(response.status);
                setData(response.data)
            })
            .catch(error => {
                setErrors(error.response?.data);
                setStatus(error.response?.status);
            })
        }catch(error){
            setErrors(error);
            console.log(error)
        }
    }

    return {data,status,errors,handlePost}

}

export default post;