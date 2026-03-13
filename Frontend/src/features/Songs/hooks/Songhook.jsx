import SongsContext from "../SongContext";
import { useContext } from "react";

export const useSongs = () => {

    const context=useContext(SongsContext)
    const {songs,setSongs,loading,setLoading}=context
    if(!context){
        throw new Error("useSongs must be used within a SongsProvider");
    }
     async function getSongs(){
         setLoading(true)
         try{
             const data=await getSongs()
             setSongs(data.songs)
             return data
         }finally{
             setLoading(false)
         }
     } 
       return {songs ,loading, getSongs} 
}
