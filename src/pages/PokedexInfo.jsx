import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Movements from "./Movements";
import "./styles/pokedexInfo.css";
import toast from "react-hot-toast";

const PokedexInfo = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    axios
      .get(URL)
      .then((res) => {
        setPokemon(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/pokedex/err");
        errorToast();
      });
  }, [id]);

  const errorToast = () => {
    toast.error(
      "Okey... Something go wrong, maybe you write wrong the name of the pokemon, or who knows, maybe a Wizzard did it .",
      {
        duration: 8000,
      }
    );
  };

  const handleClick = () => {
    navigate("/pokedex/");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`btn__goBack bg-${pokemon?.types[0].type.name}`}>
        {"<"}
      </button>
      <article
        className={`poke-card-info border-${pokemon?.types[0].type.name}`}>
        <header
          className={`poke-card-info__header bg-${pokemon?.types[0].type.name}`}>
          <img
            className='poke-card-info__sprite'
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt='pokemonImg'
          />
        </header>
        <section className='poke-card-info__body'>
          <div className='poke-card-info__name-id-container'>
            <h3
              className={`poke-card-info__name-id color-${pokemon?.types[0].type.name}`}>
              #{pokemon?.id}
            </h3>
          </div>
          <div className='poke-card-info__name-container'>
            <div className='poke-card-info__span'></div>
            <h3
              className={`poke-card-info__name color-${pokemon?.types[0].type.name}`}>
              {pokemon?.name}
            </h3>
            <div className='poke-card-info__span'></div>
          </div>
          <div className='poke-card-info__conditions'>
            <div className='poke-card-info__conditions-weight'>
              <span className='poke-card-info__weight-span'>Weight</span>
              <h3 className='poke-card-info__weight'>{pokemon?.weight}</h3>
            </div>
            <div className='poke-card-info__conditions-height'>
              <span className='poke-card-info__weight-span'>Height</span>
              <h3 className='poke-card-info__height'>{pokemon?.height}</h3>
            </div>
          </div>
          <div className='poke-card-info__typesAbility'>
            <div className='poke-card-info__types'>
              <h3 className='poke-card-info__types-title'>Types</h3>
              <ul className='poke-card-info__types-container'>
                {pokemon?.types.map((type) => (
                  <li
                    className={`poke-card-info__type bg-info-${type.type.name}`}
                    key={type.type.name}>
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className='poke-card-info__abilities-container'>
              <h3 className='poke-card-info__abilities-title'>Abilities</h3>
              <ul className='poke-card-info__ability-container'>
                {pokemon?.abilities.map((ability) => (
                  <li
                    className='poke-card-info__ability'
                    key={ability.ability.name}>
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className='stats-container'>
          <div className='stats__title-container'>
            <h1 className='stats__title'>Stats</h1>
          </div>
          <div className='stats__pixel'></div>
        </section>
        <section className='progressBar-container'>
          {pokemon?.stats.map((stat) => (
            <div key={stat.stat.name} className='progressBar'>
              <div className='progressbar__title-container'>
                <h2 className='progressBar__title' id={`${stat.stat.name}`}>
                  {stat.stat.name}:
                </h2>
                <h2 className='progressBar__title-number'>
                  {stat.base_stat}/200
                </h2>
              </div>
              <div className='progressbar__bar'>
                <div
                  className='progressbar__complete'
                  style={{ width: `${(stat.base_stat * 100) / 200}%` }}></div>
              </div>
            </div>
          ))}
        </section>
      </article>
      <Movements pokemon={pokemon} />
      <Footer />
    </>
  );
};

export default PokedexInfo;
