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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerGlobal(e.target.name.value.trim()));
    welcomeToast(e.target.name.value);
    e.target.name.value = "";
    navigate("/pokedex");
  };

  const welcomeToast = (e) => {
    toast.success(`Hi ${e}! You can check every pokemon you want, enjoy! `, {
      duration: 8000,
    });
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
