/** @format */

import { PlaylistType, User } from "../typescriptVar/types";

export const checkPlaylistFacvorites = (
  playlist: PlaylistType,
  user: User | null
) => {
  if (user) return user.playlistFavorites.some((s) => s === playlist._id);
};
