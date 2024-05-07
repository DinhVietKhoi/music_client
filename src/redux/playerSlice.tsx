/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlaylistType, Song } from "../typescriptVar/types";
interface MusicState {
  isLoop: boolean;
  isPlaying: boolean;
  volume: number;
  loop: boolean;
  sort: boolean;
  playlist: Song[];
  currentSong: Song | null;
}
const initialState: MusicState = {
  isLoop: false,
  isPlaying: false,
  volume: 50,
  loop: false,
  sort: false,
  playlist: [],
  currentSong: null,
};
const musicSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong(state, action: PayloadAction<Song>) {
      state.isPlaying = true;
      state.currentSong = action.payload;
      const isSongInPlaylist = state.playlist.some(
        (song: Song) => song._id === action.payload._id
      );
      if (!isSongInPlaylist) {
        state.playlist.push(action.payload);
      }
    },
    playAllSong(state, action: PayloadAction<Song[]>) {
      state.isPlaying = true;
      state.currentSong = action.payload[0];

      state.playlist = action.payload;
    },
    pauseSong(state) {
      state.isPlaying = false;
    },
    playSong1(state) {
      state.isPlaying = true;
    },
    setLoopPlaylist(state) {
      state.isLoop ? (state.isLoop = false) : (state.isLoop = true);
    },
    sortList(state) {
      const currentSong = state.currentSong;
      const playlist = state.playlist;
      if (currentSong && playlist.length > 1) {
        const currentIndex = playlist.findIndex(
          (song) => song._id === currentSong._id
        );
        if (currentIndex !== -1) {
          playlist.splice(currentIndex, 1);
          const shuffledPlaylist = playlist.sort(() => Math.random() - 0.5);
          shuffledPlaylist.unshift(currentSong);
          state.playlist = shuffledPlaylist;
        }
      }
    },
    nextSong(state) {
      state.isPlaying = true;
      const indexSongCurrent = state.playlist.findIndex(
        (s: Song) => s._id === state.currentSong?._id
      );
      if (state.playlist.length > indexSongCurrent + 1) {
        state.currentSong = state.playlist[indexSongCurrent + 1];
      } else if (
        state.playlist.length == indexSongCurrent + 1 &&
        state.isLoop === true
      ) {
        state.currentSong = state.playlist[0];
      }
    },
    prevSong(state) {
      state.isPlaying = true;
      const indexSongCurrent = state.playlist.findIndex(
        (s: Song) => s._id === state.currentSong?._id
      );
      if (indexSongCurrent > 0) {
        state.currentSong = state.playlist[indexSongCurrent - 1];
      } else if (indexSongCurrent == 0 && state.isLoop === true) {
        state.currentSong = state.playlist[state.playlist.length - 1];
      }
    },
    playPlaylist(state, action: PayloadAction<PlaylistType>) {
      state.playlist = [];
      state.isPlaying = true;
      state.currentSong = action.payload.songList[0];
      state.playlist = action.payload.songList;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    addToPlaylist(state, action: PayloadAction<Song>) {
      if (state.playlist.length == 0) {
        state.isPlaying = true;
        state.currentSong = action.payload;

        state.playlist.push(action.payload);
      } else {
        state.playlist.push(action.payload);
      }
    },
    clearSongFromPlaylist(state) {
      if (state.currentSong) state.playlist = [state.currentSong];
    },
    removeFromPlaylist(state, action: PayloadAction<Song>) {
      const index = state.playlist.findIndex(
        (song: Song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.playlist.splice(index, 1);
      }
    },
  },
});
export const {
  setLoopPlaylist,
  sortList,
  playSong,
  playAllSong,
  playSong1,
  pauseSong,
  nextSong,
  prevSong,
  setVolume,
  addToPlaylist,
  removeFromPlaylist,
  clearSongFromPlaylist,
  playPlaylist,
} = musicSlice.actions;
export default musicSlice.reducer;
