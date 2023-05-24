import React from "react";
import './NavBar.css'
import { Route, Routes, NavLink } from "react-router-dom";
import Error from "../pages/Error";
export default function NavBar() {
  return (
    <div className="NavBar">
      <span className="nav-logo">Personally</span>
      <nav>
        {/*
        <div className='nav-items'>
          <a href='Home'>Daily Digest</a>
          <a href='About'>Design Tools</a>
          <a href='service'>Tutorials</a>
          <button className="Subscribe" type="submit">Subscribe</button>
        </div>
      </nav>
*/}
        <div className="nav-items">
          <NavLink className="nav-link" to="/DailyDigest">Daily Digest </NavLink>
          <NavLink className="nav-link" to="/">H</NavLink>
          <NavLink className="nav-link" to="/DesignTools">Design Tools</NavLink>
          <NavLink className="nav-link" to="/Tutorials">Tutorials</NavLink>

          <button className="Subscribe" type="submit">Subscribe</button>
        </div>
      </nav>
    </div >
  );
}





