import React from "react";
import logo from "../images/logo.png";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FaTools } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <img src={logo} alt="logo" />
          <form>
            <button className="icon">
              <BiMenu />
            </button>

            <input type="text" placeholder="Search.." name="search" />
            <button className="icon">
              <BiSearch />
            </button>
          </form>
        </div>

        <div class="header-right">
          <div className="menu">
            <a href="#contact">Subject</a>
            <a href="#about">Explorer</a>
            <a href="#about">Donate</a>
          </div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </header>
      <section className="h-bottom">
        <BiMenu className="icon2" />
        <FaTools className="icon2" />
      </section>
    </>
  );
};

export default Header;
