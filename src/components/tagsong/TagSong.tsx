/** @format */

import React from "react";
import "./tagsong.scss";
import { Link } from "react-router-dom";
import { FaHeart, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "../../typescriptVar/types";
import { addToPlaylist, playSong } from "../../redux/playerSlice";
import { MdPlaylistAdd } from "react-icons/md";
import { checkSong } from "../../utils/checkSongInPlaylist";
import { RootState } from "../../redux/reducer";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { checkMusicCurrent } from "../../utils/checkMusicCurrent";
import Wave from "react-wavify";
import { api } from "../../axios/Api";
import { checkSongFacvorites } from "../../utils/checkSongFavorites";
import { likeSong } from "../../redux/userSlice";

interface TagSongProps {
  song: Song;
}
export default function TagSong({ song }: TagSongProps) {
  const dispatch = useDispatch();
  const handlePlaySong = (song: Song) => {
    dispatch(playSong(song));
  };
  const handleAddSongToPlaylist = (song: Song) => {
    dispatch(addToPlaylist(song));
    // console.log(song);
  };
  const playlist = useSelector((state: RootState) => state.player.playlist);
  const currentSong = useSelector(
    (state: RootState) => state.player.currentSong
  );
  const user = useSelector((state: RootState) => state.user.user);
  const handleLikeSong = () => {
    api.post("/user/likeSong", { songId: song._id, userId: user?._id });
    dispatch(likeSong(song._id));
  };
  return (
    <div className="tag-song">
      <div
        className={
          checkMusicCurrent(song, currentSong)
            ? "tag-song__container play"
            : "tag-song__container"
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
        <div className="tag-song__control">
          <FaHeart
            onClick={handleLikeSong}
            className={checkSongFacvorites(song, user) ? "active" : ""}
          />
          {!checkSong(song, playlist) ? (
            <MdPlaylistAdd
              onClick={() => handleAddSongToPlaylist(song)}
              className="add-song-playlist"
            />
          ) : (
            <IoCheckmarkDoneSharp className="disable" />
          )}
        </div>
      </div>
    </div>
  );
}
