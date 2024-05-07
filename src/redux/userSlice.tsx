/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../typescriptVar/types";
interface userState {
  isLogin: boolean;
  user: User | null;
}
const initialState: userState = {
  isLogin: false,
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isLogin = true;
      state.user = action.payload;
    },
    likeSong(state, action: PayloadAction<string>) {
      if (state.user) {
        if (state.user?.songFavorites.includes(action.payload)) {
          state.user.songFavorites = state.user.songFavorites.filter(
            (s) => s != action.payload
          );
        } else {
          state.user.songFavorites.push(action.payload);
        }
      }
    },
    likePlaylist(state, action: PayloadAction<string>) {
      if (state.user) {
        if (state.user?.playlistFavorites.includes(action.payload)) {
          state.user.playlistFavorites = state.user.playlistFavorites.filter(
            (s) => s != action.payload
          );
        } else {
          state.user.playlistFavorites.push(action.payload);
        }
      }
    },
  },
});

export const { login, likeSong, likePlaylist } = userSlice.actions;
export default userSlice.reducer;
