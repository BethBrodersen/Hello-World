import { useState } from "react";
import Song from "./Song";

const SongList = () => {

    const [visible, setVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return <div>
        <ul style={{ display : visible ? "block" : "none" }}    >
            <Song title="Barbie Girl" artist="Aquaworld" />
            <Song title="Last Thing On My Mind" artist="Steps" />
        </ul>
        <button onClick={toggleVisibility} >{ visible ? "Hide songs" : "Show songs"}</button>
    </div>

}

export default SongList;