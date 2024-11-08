import { Outlet } from "react-router-dom";
import { Carousel, GeneralProductBar, SideBar, NavBar } from "../components";
import styled from "styled-components";
import Wrapper from "../assets/wrapper/AppLayOut";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { checkDefaultTheme } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { addDarkTheme } from "../context/darkThemeSlice";
function AppLayOut() {
  const [showSideBar, setShowSidBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());
  const dispatch = useDispatch();
  function toggleDarkTheme() {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // then if newDarkTheme is true will add class dark-theme to body , if false it will remove it
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
    dispatch(addDarkTheme(newDarkTheme));
  }
  return (
    <Wrapper>
      <NavBar toggleDarkTheme={toggleDarkTheme} isDarkTheme={isDarkTheme} />
      <GeneralProductBar />
      <button className="showsidebar" onClick={() => setShowSidBar((s) => !s)}>
        <CiMenuBurger />
      </button>
      {showSideBar && <SideBar />}
      {/* <Carousel /> */}
      <Outlet />
    </Wrapper>
  );
}

export default AppLayOut;
