import React from "react";
import PokemonItem from "./PokemonItem";
import PropTypes from "prop-types";

const Pokemons = (props) => {

     return props.pokemons.map((pokemon, index) => (
        <PokemonItem key={index} id={index + 1} pokemon = {pokemon}/>
    ));
    
}

// PropTypes:
Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired,
}

export default Pokemons;