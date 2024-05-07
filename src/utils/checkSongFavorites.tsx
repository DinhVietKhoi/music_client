/** @format */

import { Song, User } from "../typescriptVar/types";

export const checkSongFacvorites = (song: Song, user: User | null) => {
  if (user) return user.songFavorites.some((s) => s === song._id);
};
