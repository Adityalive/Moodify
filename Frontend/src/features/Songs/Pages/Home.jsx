import FaceExpression from "../../Expression/components/Expression";
import SongHook from "../hooks/Songhook";
import react from "react"

export const Home=()=>{
       const {handleSongs}=SongHook()
        return(<div>
        <FaceExpression></FaceExpression>
        <button onClick={handleSongs}>Get Songs</button>
        <div>
            {loading?<h1>Loading</h1>:songs.map((song)=><div>{song.name}</div>)}
        </div>
    </div>)
}