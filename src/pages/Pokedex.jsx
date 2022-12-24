import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pokedex/Pagination";
import PokeCard from "../components/Pokedex/PokeCard";
import "./styles/pokedex.css";

const Pokedex = () => {
  const { trainer } = useSelector((state) => state);

  const [pokemons, setPokemons] = useState();
  const [types, setTypes] = useState();
  const [typeSelected, setTypeSelected] = useState("All Pokemons");

  useEffect(() => {
    if (typeSelected !== "All Pokemons") {
      // Hacer la peticion de los pokemons por tipo
      axios
        .get(typeSelected)
        .then((res) => setPokemons(res.data.pokemon.map((e) => e.pokemon)))
        .catch((err) => {
          console.log(err);
          errorToast();
        });
    } else {
      // Hacer la peticion de todos los pokemos

      const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154`;
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [typeSelected]);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type`;
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value.trim().toLowerCase();
    navigate(`/pokedex/${input}`);
    e.target.search.value = "";
  };

  const handleChange = (e) => {
    setTypeSelected(e.target.value);
    setPage(1);
  };

  //Logica de paginación
  const [page, setPage] = useState(1);
  const [pokerPerPage, setPokerPerPage] = useState(16);
  const initialPoke = (page - 1) * pokerPerPage;
  const finalPoke = page * pokerPerPage;
  const maxPage = pokemons && Math.ceil(pokemons.length / pokerPerPage);

  return (
    <div className='headerPokedex'>
      <h2 className='headerPokedex__title'>
        <span className='headerPokedex__span'>Welcome {trainer},</span> here you
        can find your favorite pokemon
      </h2>
      <div className='headerPokedex__form-container'>
        <form className='headerPokedex__form' onSubmit={handleSubmit}>
          <input
            className='headerPokedex__inp'
            placeholder='Find a Pokemon'
            type='text'
            id='search'
          />
          <button className='headerPokedex__btn'>Search</button>
        </form>
        <select className='headerPokedex__select' onChange={handleChange} id=''>
          <option className='headerPokedex__option' value='All Pokemons'>
            All Pokemons
          </option>
          {types?.map((type) => (
            <option key={type.url} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className='poke-container'>
        {pokemons?.slice(initialPoke, finalPoke).map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  );
};

export default Pokedex;
