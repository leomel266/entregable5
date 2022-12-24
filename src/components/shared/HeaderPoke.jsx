import React from "react";
import "./styles/headerPoke.css";

const HeaderPoke = () => {
  return (
    <header className='header'>
      <img className='header__img' src='Home/pokedex.png' alt='' />
      <div className='header__black'>
        <div className='header__circle'></div>
      </div>
    </header>
  );
};

export default HeaderPoke;
