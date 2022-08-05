import { SongType } from "./SongList";

const Song = (props : SongProps) => {
    return <li>{props.song.title} by {props.song.artist}</li>
}

type SongProps = {
    song : SongType
}

export default Song;