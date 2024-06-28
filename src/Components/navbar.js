import React from 'react';
import './NavBarNewspaper.css';

const NavBarNewspaper = () => {
  return (
    <nav className="navbar-newspaper">
      <a href="/" className="navbar-logo">InfoMingle</a>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
        <li><a href="/health">Health</a></li>
        <li><a href="/technology">Technology</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/science">Science</a></li>
      </ul>
    </nav>
  );
};

export default NavBarNewspaper;
