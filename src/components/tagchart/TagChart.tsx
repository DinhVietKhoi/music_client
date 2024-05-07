/** @format */

import React from "react";
import "./tagchart.scss";
import { Link } from "react-router-dom";
import { Song } from "../../typescriptVar/types";
import { useDispatch, useSelector } from "react-redux";
import { playSong } from "../../redux/playerSlice";
import { FaPlay } from "react-icons/fa";
import { checkMusicCurrent } from "../../utils/checkMusicCurrent";
import { RootState } from "../../redux/reducer";
import Wave from "react-wavify";
interface TagChartProps {
  song: Song;
}

export default function TagChart({ song }: TagChartProps) {
  const dispatch = useDispatch();
  const handlePlaySong = (song: Song) => {
    dispatch(playSong(song));
  };
  const currentSong = useSelector(
    (state: RootState) => state.player.currentSong
  );
  return (
    <div className="tag-chart">
      <div
        className={
          checkMusicCurrent(song, currentSong)
            ? "tag-chart__container play"
            : "tag-chart__container"
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
        <span onClick={() => handlePlaySong(song)}>{song.name}</span>
        <Link to={`/artists/${song.artist._id}`}>{song.artist.name}</Link>
      </div>
    </div>
  );
}
