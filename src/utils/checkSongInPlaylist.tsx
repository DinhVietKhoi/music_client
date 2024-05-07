/** @format */

import { Song } from "../typescriptVar/types";

export const checkSong = (song: Song, playlist: Song[]) => {
  return playlist.some((item: Song) => item._id === song._id);
};
