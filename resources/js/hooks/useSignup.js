import { post } from "@/js/axiosClient"

const useSignup = () => {
    const [data,status,errors,handlePost] = post()
    const signup = async (payload) => {
        await handlePost('/signup',payload);
        
    }
    return {data,status,errors,signup}
}

export default useSignup