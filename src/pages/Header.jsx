import React from 'react';
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './header.css';

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="navList">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
