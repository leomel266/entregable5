import React from "react";
import { useNavigate } from "react-router-dom";
import errImg from "../assets/error.jpg";
import Footer from "./Footer";
import "./styles/erorCard.css";

const ErrorCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokedex/");
  };
  return (
    <>
      <div className='error-container'>
        <h1 className='error__title'>Error, Something Go Wrong 😥</h1>
        <p className='error__p'>Plis, check the pokemon name 😃</p>
        <button className='error__btn' onClick={handleClick}>
          GO Pokedex
        </button>
        <img src={errImg} alt='' />
      </div>
      <Footer />
    </>
  );
};

export default ErrorCard;
