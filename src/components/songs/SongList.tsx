import { useState } from "react";
import Song from "./Song";

export type SongType = {title : string, artist: string};

const SongList = () => {

    const [visible, setVisible] = useState<boolean>(true);

    const [song1, setSong1] = 
    useState<SongType>({title : "Barbie Girl", artist : "Aqua"});
    const [song2, setSong2] = 
    useState<SongType>({title : "Last Thing on My Mind", artist : "Steps"});

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return <div>
        <ul style={{ display : visible ? "block" : "none" }}    >
            <Song song={song1} />
            <Song song={song2} />
        </ul>
        <button onClick={toggleVisibility} >{ visible ? "Hide songs" : "Show songs"}</button>
    </div>

}

export default SongList;