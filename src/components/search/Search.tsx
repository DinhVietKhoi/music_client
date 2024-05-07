/** @format */

import React from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import "./search.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducer";
export default function Search({ ...props }) {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div
      className={
        !props.menu ? "search small-size-mar" : "search small-size-mar toggled"
      }
    >
      <div className="search__container container">
        <div className="search__input">
          <CiMenuBurger onClick={props.handleMenuSmall} />

          <CiSearch />

          <input type="text" placeholder="Nhập tên bài hát ..."></input>
        </div>
        <div className="search__user">
          <img src={user?.image} alt=""></img>
          <span>{user?.name}</span>
        </div>
      </div>
    </div>
  );
}
