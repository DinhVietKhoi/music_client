/** @format */

interface Artist {
  _id: string;
  name: string;
  history: string;
  dateOfBird: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface Song {
  _id: string;
  name: string;
  artist: Artist;
  genre: string;
  link: string;
  lyrics: string;
  view: number;
  like: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface PlaylistType {
  _id: string;
  name: string;
  songList: Song[];
  view: number;
  like: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface User {
  _id: string;
  username: string;
  image: string;
  name: string;
  password: string;
  songFavorites: string[];
  playlistFavorites: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export type { Artist, Song, PlaylistType, User };
