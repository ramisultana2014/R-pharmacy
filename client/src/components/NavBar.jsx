import styled from "styled-components";
import Wrapper from "../assets/wrapper/NavBar";
// import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useLogout } from "../../features/authentication/useLogOut";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { useState } from "react";
// toggleDarkTheme, isDarkTheme  coming from AppLayOut

function NavBar({ toggleDarkTheme, isDarkTheme }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  //console.log(search);
  const cart = useSelector((store) => store.cart.cart);
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);
  //console.log(user);
  const { logout } = useLogout();
  function handleLogOut() {
    logout();
  }
  // function toggleDarkTheme() {
  //   const newDarkTheme = !isDarkTheme;
  //   setIsDarkTheme(newDarkTheme);
  //   // then if newDarkTheme is true will add class dark-theme to body , if false it will remove it
  //   document.body.classList.toggle("dark-theme", newDarkTheme);
  //   localStorage.setItem("darkTheme", newDarkTheme);
  // }
  function handleSearch(e) {
    e.preventDefault();
    if (search.trim()) {
      window.open(`https://en.wikipedia.org/wiki/${search}`, "_blank");
    }
    setSearch("");
  }
  return (
    <Wrapper>
      <div className="tooltip">
        <span className="tooltiptext">Home Page</span>
        <Link to="/homepage">
          <Logo />
        </Link>
      </div>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <LuSearch />
      </div>
      <div className="nav-account-info">
        <span onClick={() => navigate("/cart")}>
          {cart?.length > 0 ? <RiShoppingBag4Line /> : <IoBagOutline />}
          <span className="cartitems">{cart?.length ? cart.length : ""}</span>
        </span>
        <div className="show-logout">
          {/* <MdOutlineAccountCircle /> */}
          <span>{user?.name}</span>
          <div className="logout">
            <button onClick={handleLogOut}>LOG OUt</button>
          </div>
        </div>

        <button onClick={toggleDarkTheme} className="darkMode">
          {isDarkTheme ? <CiLight /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </Wrapper>
  );
}

export default NavBar;
