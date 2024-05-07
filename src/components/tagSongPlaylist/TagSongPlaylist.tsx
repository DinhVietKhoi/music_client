/** @format */

import React from "react";
import "./tagSongPlaylist.scss";
import { Link } from "react-router-dom";
import { FaHeart, FaPlay } from "react-icons/fa";
// import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import Wave from "react-wavify";

import { useDispatch, useSelector } from "react-redux";
import { Song } from "../../typescriptVar/types";
import { playSong, removeFromPlaylist } from "../../redux/playerSlice";
import { RootState } from "../../redux/reducer";
import { checkMusicCurrent } from "../../utils/checkMusicCurrent";
import { IoClose } from "react-icons/io5";
import { likeSong } from "../../redux/userSlice";
import { checkSongFacvorites } from "../../utils/checkSongFavorites";
import { api } from "../../axios/Api";

interface TagSongPlaylistProps {
  song: Song;
}
export default function TagSongPlaylist({ song }: TagSongPlaylistProps) {
  const dispatch = useDispatch();
  const handlePlaySong = (song: Song) => {
    dispatch(playSong(song));
  };
  const removeSongFromList = (song: Song) => {
    dispatch(removeFromPlaylist(song));
  };
  const currentSong = useSelector(
    (state: RootState) => state.player.currentSong
  );
  const user = useSelector((state: RootState) => state.user.user);
  const handleLikeSong = () => {
    api.post("/user/likeSong", { songId: song._id, userId: user?._id });
    dispatch(likeSong(song._id));
  };
  return (
    <div className="tag-song-playlist">
      <div
        className={
          checkMusicCurrent(song, currentSong)
            ? "tag-song-playlist__container play"
            : "tag-song-playlist__container"
        }
      >
        <div className="image" onClick={() => handlePlaySong(song)}>
          {!checkMusicCurrent(song, currentSong) && (
            <div className="overlay">
              <FaPlay />
            </div>
          )}

          <img src={song.artist.image} alt=""></img>
          {checkMusicCurrent(song, currentSong) && (
            <Wave
              className="wave"
              fill="#7c3aed"
              style={{ display: "flex" }}
              options={{
                speed: 0.4,
                points: 100,
              }}
            />
          )}
        </div>
        <div className="name">
          <span onClick={() => handlePlaySong(song)}>{song.name}</span>
          <Link to={`/artists/${song.artist._id}`}>{song.artist.name}</Link>
        </div>
        <div className="tag-song-playlist__control">
          <IoClose
            className={
              checkMusicCurrent(song, currentSong)
                ? "btn-remove disable"
                : "btn-remove"
            }
            onClick={() => removeSongFromList(song)}
          />
          <FaHeart
            onClick={handleLikeSong}
            className={checkSongFacvorites(song, user) ? "active" : ""}
          />
        </div>
      </div>
    </div>
  );
}
