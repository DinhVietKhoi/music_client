/** @format */

import React from "react";

import logo from "../../assets/logo/logo1.svg";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { GiMusicSpell } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaRegDotCircle, FaRegHeart } from "react-icons/fa";
import { RiHome4Line } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import { TfiLineDotted } from "react-icons/tfi";
import { PiMusicNotesPlusFill } from "react-icons/pi";
interface NavbarProps {
  menu: boolean;
  navSmall: boolean;
  handleMenu: () => void;
  handleMenuSmall: () => void;
}
export default function Navbar({
  menu,
  handleMenu,
  navSmall,
  handleMenuSmall,
}: NavbarProps) {
  return (
    <div className={!navSmall ? "navbar nav-active" : "navbar"}>
      <div className={menu ? "navbar__container active" : "navbar__container"}>
        <div className="navbar__header">
          {menu && (
            <Link className="logo" to="/">
              <img src={logo} onClick={() => handleMenu}></img>
            </Link>
          )}
          <div className="menu" onClick={handleMenu}>
            {!menu ? <CiMenuBurger /> : <CiMenuFries />}
          </div>
        </div>
        <div className="navbar__body">
          <div className="navbar__menu">
            <div className={menu ? "navbar__list" : "navbar__list toggled"}>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <RiHome4Line />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/genres"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <GiMusicSpell />
                <span>Genres</span>
              </NavLink>
              <NavLink
                to="/music"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <IoIosMusicalNotes />
                <span>Free Music</span>
              </NavLink>
              <NavLink
                to="/playlist"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <FaRegDotCircle />
                <span>Playlist</span>
              </NavLink>
              <NavLink
                to="/artists"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <IoMicOutline />
                <span>Artists</span>
              </NavLink>
            </div>
          </div>
          <div className="navbar__actions">
            <div className={menu ? "navbar__list" : "navbar__list toggled"}>
              <h1>{menu ? "Actions" : <TfiLineDotted />}</h1>
              <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <FaRegHeart />
                <span>Favorites</span>
              </NavLink>
              {/* <NavLink
                to="/history"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <FaHistory />
                <span>History</span>
              </NavLink> */}
            </div>
          </div>
        </div>
        <div className="navbar__bottom">
          <button className="disable">
            <PiMusicNotesPlusFill />
            {menu && <span>Add Song</span>}
          </button>
        </div>
      </div>
      <div className="navbar__container active small-size-nav">
        <div className="navbar__header">
          <Link className="logo" to="/">
            <img src={logo} alt=""></img>
          </Link>
          <div className="menu" onClick={handleMenuSmall}>
            <CiMenuFries />
          </div>
        </div>
        <div className="navbar__body">
          <div className="navbar__menu">
            <div className={menu ? "navbar__list" : "navbar__list"}>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <RiHome4Line />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/genres"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <GiMusicSpell />
                <span>Genres</span>
              </NavLink>
              <NavLink
                to="/music"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <IoIosMusicalNotes />
                <span>Free Music</span>
              </NavLink>
              <NavLink
                to="/playlist"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <FaRegDotCircle />
                <span>Playlist</span>
              </NavLink>
              <NavLink
                to="/artists"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <IoMicOutline />
                <span>Artists</span>
              </NavLink>
            </div>
          </div>
          <div className="navbar__actions">
            <div className={menu ? "navbar__list" : "navbar__list"}>
              <h1>{menu ? "Actions" : <TfiLineDotted />}</h1>
              <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <FaRegHeart />
                <span>Favorites</span>
              </NavLink>
              {/* <NavLink
                to="/history"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "navbar__item"
                    : isActive
                    ? "navbar__item active"
                    : "navbar__item"
                }
              >
                <FaHistory />
                <span>History</span>
              </NavLink> */}
            </div>
          </div>
        </div>
        <div className="navbar__bottom">
          <button className="disable">
            <PiMusicNotesPlusFill />
            {menu && <span>Add Song</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
