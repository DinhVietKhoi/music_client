/** @format */

import React, { useEffect, useRef, useState } from "react";

import "./playerControl.scss";
import { RxLoop } from "react-icons/rx";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaCirclePause, FaCirclePlay, FaVolumeLow } from "react-icons/fa6";
// import { LiaRandomSolid } from "react-icons/lia";
import { BsMusicNoteList } from "react-icons/bs";
// import { IoClose } from "react-icons/io5";
import { formatSeconds } from "../../utils/ChangeTime";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/reducer";
import TagSongPlaylist from "../tagSongPlaylist/TagSongPlaylist";
import { Song } from "../../typescriptVar/types";
import {
  clearSongFromPlaylist,
  nextSong,
  prevSong,
  sortList,
  setLoopPlaylist,
} from "../../redux/playerSlice";
import { LiaRandomSolid } from "react-icons/lia";
import { TbPlaylistOff } from "react-icons/tb";

export default function PlayerControl({ ...props }) {
  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(false);
  const [play, setPlay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [durationTime, setdurationTime] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState<number>(50);
  const [volumeInput, setVolumeInput] = useState<boolean>(false);
  const volumeInputRef = useRef<HTMLDivElement>(null);
  const [dropbox, setDropbox] = useState<boolean>(false);
  const dropboxRef = useRef<HTMLDivElement>(null);
  const playList = useSelector((state: RootState) => state.player.playlist);
  const isLoop = useSelector((state: RootState) => state.player.isLoop);
  const [changeSong, setChangeSong] = useState(false);
  const handleSetLoopPlaylist = () => {
    if (playList.length > 1) {
      dispatch(setLoopPlaylist());
    }
  };
  const dispatch = useDispatch();
  const HandleClearPlaylist = () => {
    dispatch(clearSongFromPlaylist());
  };
  const handleNextSong = () => {
    dispatch(nextSong());
  };
  const handlePrevSong = () => {
    dispatch(prevSong());
  };
  const handlePlay = () => {
    setPlay(!play);
    play ? audioRef.current?.pause() : audioRef.current?.play();
  };
  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current && audioRef.current.duration) {
      const progress = parseFloat(event.target.value);
      setCurrentTime(progress);
      audioRef.current.currentTime = progress;
    }
  };
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    const interval = setInterval(() => {
      if (audioRef.current) {
        setdurationTime(Math.round(audioRef.current.duration));

        setCurrentTime(Math.round(audioRef.current.currentTime));
      }
    }, 1000); // Update current time every second

    const handleClickOutside = (event: MouseEvent) => {
      if (
        volumeInputRef.current &&
        !volumeInputRef.current.contains(event.target as Node)
      ) {
        setVolumeInput(false);
      }
      // if (
      //   dropboxRef.current &&
      //   !dropboxRef.current.contains(event.target as Node) &&
      //   !(event.target as HTMLElement).classList.contains("btn-remove")
      // ) {
      //   setDropbox(false);
      // }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const musicCurrent = useSelector(
    (state: RootState) => state.player.currentSong
  );
  const handleAudioEnd = () => {
    dispatch(nextSong());
    if (
      playList.findIndex((song: Song) => song._id == musicCurrent?._id) + 1 ===
      playList.length
    ) {
      setPlay(false);
    }
  };
  useEffect(() => {
    setChangeSong(!changeSong);
    setPlay(true);
  }, [musicCurrent]);
  useEffect(() => {
    const index = playList.findIndex(
      (song) => song._id === (musicCurrent && musicCurrent._id)
    );
    if (index === playList.length - 1 && isLoop === false) {
      setNextBtn(false);
    } else {
      setNextBtn(true);
    }
    const index1 = playList.findIndex(
      (song) => song._id === (musicCurrent && musicCurrent._id)
    );
    if (index1 === 0 && isLoop === false) {
      setPrevBtn(false);
    } else {
      setPrevBtn(true);
    }
  }, [changeSong, isLoop, playList]);
  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      setVolume(+event.target.value);
      audioRef.current.volume = +event.target.value / 100;
    }
  };

  return (
    <div
      className={
        !props.menu
          ? "player-control small-size-mar"
          : "player-control small-size-mar toggled"
      }
    >
      <div className="player-control__container container">
        <audio
          ref={audioRef}
          src={musicCurrent?.link}
          autoPlay
          loop={loop}
          onEnded={handleAudioEnd}
        ></audio>
        <div className="player-control__progress">
          <input
            type="range"
            min={0}
            value={currentTime}
            max={
              audioRef.current?.duration && !isNaN(audioRef.current?.duration)
                ? audioRef.current?.duration
                : 0
            }
            onChange={handleProgressChange}
          ></input>
        </div>
        <div className="player-control__song">
          <img src={musicCurrent?.artist.image} alt=""></img>
          <div className="title">
            <span>{musicCurrent?.name}</span>
            <span>{musicCurrent?.artist.name}</span>
          </div>
        </div>
        <div className="player-control__action">
          <div
            className={loop ? "button" : "button disable"}
            onClick={() => setLoop(!loop)}
          >
            <RxLoop />
          </div>
          <div className="button">
            <MdSkipPrevious
              onClick={handlePrevSong}
              className={!prevBtn ? "hide" : ""}
            />
          </div>
          <div className="button play" onClick={handlePlay}>
            {!play ? <FaCirclePlay /> : <FaCirclePause />}
          </div>
          <div className="button">
            <MdSkipNext
              onClick={handleNextSong}
              className={!nextBtn ? "hide" : ""}
            />
          </div>
          <div className="button list-item-playlist" ref={volumeInputRef}>
            <FaVolumeLow
              onClick={() => {
                setVolumeInput(!volumeInput);
              }}
            />
            {volumeInput && (
              <div className="volume">
                <input
                  type="range"
                  onChange={handleVolume}
                  value={volume}
                  min={0}
                  max={100}
                ></input>
              </div>
            )}
          </div>
        </div>
        <div className="player-control__info">
          <div className="time">
            {formatSeconds(currentTime)}/
            {durationTime ? formatSeconds(durationTime) : "00:00"}
          </div>
          <div className="button" ref={dropboxRef}>
            <BsMusicNoteList onClick={() => setDropbox(!dropbox)} />
            <span className="numb-item" onClick={() => setDropbox(!dropbox)}>
              {playList.length}
            </span>
            {dropbox && (
              <div className="playlist__drop-box">
                <div className="head">
                  <div className="title">
                    <h1>
                      <p>Linup</p>
                    </h1>
                    <TbPlaylistOff onClick={() => setDropbox(!dropbox)} />
                  </div>
                </div>
                <div className="body">
                  {playList.map((music: Song) => (
                    <TagSongPlaylist
                      song={music}
                      key={music._id}
                    ></TagSongPlaylist>
                  ))}
                </div>
                <div className="bottom">
                  <RxLoop
                    className={isLoop ? "active" : ""}
                    onClick={handleSetLoopPlaylist}
                  />

                  <button onClick={HandleClearPlaylist}>CLEAR</button>
                  <LiaRandomSolid onClick={() => dispatch(sortList())} />
                </div>
              </div>
            )}
          </div>
          {/* <div className="button">
            <IoClose />
          </div> */}
        </div>
      </div>
    </div>
  );
}
