/** @format */

import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home/Home";
import Genres from "./pages/genres/Genres";
import Music from "./pages/music/Music";
import Playlist from "./pages/playlist/Playlist";
import Artists from "./pages/artists/Artists";
import Error from "./pages/404/Error";
import Favorites from "./pages/favorites/Favorites";
import History from "./pages/history/History";
import GenreDetail from "./pages/genreDetail/GenreDetail";
import ArtistDetail from "./pages/artistDetail/ArtistDetail";

export default function AppRoutes() {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/genres/:id" element={<GenreDetail />} />
      <Route path="/music" element={<Music />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/:id" element={<ArtistDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
