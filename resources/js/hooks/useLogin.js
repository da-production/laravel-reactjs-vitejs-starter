import { post } from "../axiosClient"

const useLogin = () => {
    const [data,status,errors,handlePost] = post();

    const login = async (payload) => {
        await handlePost('/login',payload);
    }

    return {data,status,errors,login}

}

export default useLogin