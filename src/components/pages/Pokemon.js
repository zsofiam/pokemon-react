import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

const Pokemon = props => {
  const [state, setState] = useState( {
        pokemon: {}
    }  )
    
    useEffect(() => {
        const id = props.match.params.id;
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id.toString())
    .then(res => setState({pokemon: res.data}));
  }, [])

        const{name, height, weight} = state.pokemon;
        const abilities = state.pokemon.abilities;
        const forms = state.pokemon.forms;
        const types = state.pokemon.types;
        return (<div>
         <h2>{name}</h2>
         <h3>Height: {height}</h3>
         <h3>Weight: {weight}</h3>
         <ul>
         {/* {
           abilities.map( ability => (
             <li>{ability.name}</li>
           ))
         } */}
         </ul>
        </div>);
    }


export default withRouter(Pokemon);
