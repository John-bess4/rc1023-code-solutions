import { useState } from 'react'
import './App.css'
import PokemonList from './PokemonList';

function App() {
  const pokedex = [
    { number: '001', name: 'Bublasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'JigglyPuff' },
  ];

  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonList pokedex = {pokedex} />
    </div>
  );
}

export default App
