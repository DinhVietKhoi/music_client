/** @format */

import React, { useEffect, useState } from "react";
import "./favorites.scss";
import Banner from "../../components/banner/Banner";

import TagSong from "../../components/tagsong/TagSong";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";
import { PlaylistType, Song } from "../../typescriptVar/types";
import { api } from "../../axios/Api";
import { playAllSong } from "../../redux/playerSlice";
import { FaPlay } from "react-icons/fa";
import TagPlaylist from "../../components/tagPlaylist/TagPlaylist";

export default function Favorites() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [listSongFavorites, setListSongFavorites] = useState<string[] | null>(
    null
  );
  const [listPlaylistFavorites, setListPlaylistFavorites] = useState<
    string[] | null
  >(null);
  const [dataSong, setDataSong] = useState<Song[] | null>(null);
  const [dataPlaylist, setDataPlaylist] = useState<Song[] | null>(null);
  useEffect(() => {
    if (user) {
      setListSongFavorites(user?.songFavorites);
      setListPlaylistFavorites(user?.playlistFavorites);
    }
  }, [user]);
  useEffect(() => {
    api
      .get("/song/getSongByIds", { params: { songIds: listSongFavorites } })
      .then((response) => {
        setDataSong(response.data);
      });
  }, [listSongFavorites]);
  useEffect(() => {
    api
      .get("/playlist/getPlaylistByIds", {
        params: { playlistIds: listPlaylistFavorites },
      })
      .then((response) => {
        setDataPlaylist(response.data);
      });
  }, [listPlaylistFavorites]);
  return (
    <div className="favorites">
      <Banner image={+"3"}></Banner>

      <div className="favorites__container container">
        <div className="favorites__songs">
          <div className="head">
            <div className="title">
              <h1>
                <p>SONGS</p>
              </h1>
            </div>
            {dataSong && (
              <button onClick={() => dispatch(playAllSong(dataSong))}>
                <FaPlay />
                Play
              </button>
            )}
          </div>
          <div className="body">
            {dataSong?.map((song: Song, index: number) => [
              <div key={index} className=" col c-6 m-12">
                <div className="item">
                  {/* <span className="stt">{index + 1}</span> */}
                  <TagSong
                    song={song}
                    // handleCurrentMusic={handleCurrentMusic}
                  ></TagSong>
                </div>
              </div>,
            ])}
          </div>
        </div>
        <div className="favorites__play-list">
          <div className="head">
            <div className="title">
              <h1>
                <p>PLAYLIST</p>
              </h1>
            </div>
          </div>
          <div className="body">
            {dataPlaylist &&
              dataPlaylist.map((playlist: PlaylistType) => (
                <div key={playlist._id} className=" col c-6 m-12">
                  <div className="item">
                    <TagPlaylist playlist={playlist}></TagPlaylist>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
