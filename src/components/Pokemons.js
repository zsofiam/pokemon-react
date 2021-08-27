import React from "react";
import PokemonItem from "./PokemonItem";

const Pokemons = (props) => {

     return props.pokemons.map((pokemon, index) => (
        <PokemonItem key={index} id={index + 1} pokemon = {pokemon}/>
    ));
    
}

export default Pokemons;