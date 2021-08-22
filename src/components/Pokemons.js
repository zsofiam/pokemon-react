import React, { Component } from "react";
import PokemonItem from "./PokemonItem";
import PropTypes from "prop-types";

class Pokemons extends Component{

    render(){

        return this.props.pokemons.map((pokemon, index) => (
            <PokemonItem key={index} id={index + 1} pokemon = {pokemon}/>
        ));
    }

}

// PropTypes:
Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired,
}

export default Pokemons;