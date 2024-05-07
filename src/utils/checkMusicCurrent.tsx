/** @format */

import { Song } from "../typescriptVar/types";

export const checkMusicCurrent = (
  musicCheck: Song,
  musicCurrent: Song | null
) => {
  if (musicCurrent === null) return;
  return musicCheck._id === musicCurrent._id;
};
