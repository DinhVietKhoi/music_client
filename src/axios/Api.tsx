/** @format */

import axios from "axios";

export const api = axios.create({
  baseURL: "https://music-backend-cwwb.onrender.com/v1",
});
