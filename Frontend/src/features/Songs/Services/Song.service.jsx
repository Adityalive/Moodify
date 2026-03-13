import axios from "axios";
const api=axios.create({
    baseURL:"http://localhost:3000/api/songs",
    withCredentials:true
})

export async function getSongs(){
    const response=await api.get("/getsongs");
    return response.data;
}
