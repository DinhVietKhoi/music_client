/** @format */

import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import Search from "./components/search/Search";
import AppRoutes from "./AppRoutes";
import Footer from "./components/footer/Footer";
import PlayerControl from "./components/playerControl/PlayerControl";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducer";
import { login } from "./redux/userSlice";
import { api } from "./axios/Api";
function App() {
  const distpatch = useDispatch();
  const [theme, setTheme] = useState<boolean>(false);
  // const handleTheme = () => {
  //   setTheme(!theme);
  // };
  const [menu, setMenu] = useState<boolean>(true);
  const handleMenu = (): void => {
    setMenu(!menu);
  };
  const [navSmall, setNavSmall] = useState(false);
  const handleMenuSmall = () => {
    setNavSmall(!navSmall);
  };
  useEffect(() => {
    api
      .get("/user/getUser", { params: { username: "admin" } })
      .then((response) => {
        distpatch(login(response.data));
      });
  }, []);
  const isPlaying = useSelector((state: RootState) => state.player.isPlaying);
  return (
    <div className={theme ? "app bright" : "app dark"}>
      <div className="app__container">
        <div className="app_navbar">
          <Navbar
            menu={menu}
            handleMenu={handleMenu}
            navSmall={navSmall}
            handleMenuSmall={handleMenuSmall}
          ></Navbar>
        </div>
        <div
          className={
            menu
              ? "app__body small-size-mar toggled"
              : "app__body small-size-mar"
          }
        >
          <div className="app__search">
            <Search menu={menu} handleMenuSmall={handleMenuSmall}></Search>
          </div>
          {isPlaying && (
            <div className="app__player-control">
              <PlayerControl menu={menu}></PlayerControl>
            </div>
          )}

          <div className="app__page">
            <AppRoutes />
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
