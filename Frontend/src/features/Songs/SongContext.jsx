
import {createContext} from 'react'
import { useState } from 'react'
export const SongsContext=createContext()
export async function SongsContext({children}){
   
    const [songs,setSongs]=useState([])
    const [loading,setLoading]=useState(true)
    return(
        <SongsContext.Provider vzlue={{songs,setSongs,loading,setLoading}}>
            {
                children
            }
        </SongsContext.Provider>
    )
}
export default SongsContext