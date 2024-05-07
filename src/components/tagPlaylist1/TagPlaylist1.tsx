/** @format */

import React from "react";
import "./tagPlaylist1.scss";
// import { Link } from "react-router-dom";
import { PlaylistType } from "../../typescriptVar/types";
import { useDispatch } from "react-redux";
// import { playSong } from "../../redux/playerSlice";
import { FaPlay } from "react-icons/fa";
import { SlPlaylist } from "react-icons/sl";
import { playPlaylist } from "../../redux/playerSlice";
interface PlaylistTypeProps {
  playlist: PlaylistType;
}
export default function TagPlaylist1({ playlist }: PlaylistTypeProps) {
  const dispatch = useDispatch();
  // const handlePlaySong = (song: Song) => {
  //   dispatch(playSong(song));
  // };
  return (
    <div className="tag-playlist-1">
      <div className="tag-playlist-1__container">
        <div className="image" onClick={() => dispatch(playPlaylist(playlist))}>
          <div className="overlay">
            <FaPlay />
          </div>
          <SlPlaylist />
        </div>
        <span onClick={() => dispatch(playPlaylist(playlist))}>
          {playlist.name}
        </span>
        {/* <Link to="/artists/sontungmtp">{song.artist.name}</Link> */}
      </div>
    </div>
  );
}
