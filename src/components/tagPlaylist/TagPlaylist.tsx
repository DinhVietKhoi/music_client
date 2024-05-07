/** @format */

import React from "react";
import "./tagPlaylist.scss";
// import { Link } from "react-router-dom";
import { FaPlay, FaRegHeart } from "react-icons/fa";

// import { useDispatch } from "react-redux";
import { PlaylistType } from "../../typescriptVar/types";
import { SlPlaylist } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { playPlaylist } from "../../redux/playerSlice";
import { api } from "../../axios/Api";
import { likePlaylist } from "../../redux/userSlice";
import { RootState } from "../../redux/reducer";
import { checkPlaylistFacvorites } from "../../utils/checkPlaylistFavorites";
// import { playSong } from "../../redux/playerSlice";

interface TagPlaylistProps {
  playlist: PlaylistType;
}
export default function TagPlaylist({ playlist }: TagPlaylistProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLikePlaylist = () => {
    api.post("/user/likePlaylist", {
      playlistId: playlist._id,
      userId: user?._id,
    });
    dispatch(likePlaylist(playlist._id));
  };
  return (
    <div className="tag-playlist">
      <div className="tag-playlist__container">
        <div className="image" onClick={() => dispatch(playPlaylist(playlist))}>
          <div className="overlay">
            <FaPlay />
          </div>
          <SlPlaylist />
        </div>
        <div className="name" onClick={() => dispatch(playPlaylist(playlist))}>
          {/* <span onClick={() => handlePlaySong(song)}>{playlist.name}</span> */}
          <span>{playlist.name}</span>
          {/* <Link to="/artists/mtp">{song.artist.name}</Link> */}
        </div>
        <div className="tag-playlist__control">
          <FaRegHeart
            onClick={handleLikePlaylist}
            className={checkPlaylistFacvorites(playlist, user) ? "active" : ""}
          />
        </div>
      </div>
    </div>
  );
}
