import React from "react";
import "./styles/movements.css";

const Movements = ({ pokemon }) => {
  return (
    <div className='movements-container'>
      <div className='movements__header'>
        <h2 className='movements__title'>Movements</h2>
        <div className='movements__pixel'></div>
      </div>
      <section className='movements-container-list'>
        <ul className='movements__list'>
          {pokemon?.moves.map((move) => (
            <li key={move.move.url} className='movements__item'>
              {move.move.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Movements;
