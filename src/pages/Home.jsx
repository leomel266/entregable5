import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTrainerGlobal } from "../store/slices/trainer.slice";
import Footer from "./Footer";
import "./styles/home.css";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const errorToast = (name) => {
    toast.success(
      `Okey... ${name}Something go wrong, maybe you write wrong the name of the pokemon, or who knows, maybe a Wizzard did it .`,
      {
        duration: 8000,
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerGlobal(e.target.name.value.trim()));
    e.target.name.value = "";
    navigate("/pokedex");
  };
  return (
    <>
      <div className='home-container'>
        <img className='home__banner' src='Home/pokedex.png' alt='' />
        <h1 className='home__title'>Hi Trainer!</h1>
        <p className='home__paragraph'>Give Me Your Name To Start</p>
        <form className='home__form' onSubmit={handleSubmit}>
          <input
            className='home__input'
            id='name'
            type='text'
            placeholder='Your Name...'
          />
          <button className='home__btn'>Start</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Home;
