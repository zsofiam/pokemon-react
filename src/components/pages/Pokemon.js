import React, { Component } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

class Pokemon extends Component {
    state= {
        pokemon: {}
    }  
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id.toString())
    .then(res => this.setState({pokemon: res.data}));
    }

    render() {
        const{name, height, weight} = this.state.pokemon;
        const abilities = this.state.pokemon.abilities;
        console.log(abilities);
        const forms = this.state.pokemon.forms;
        const types = this.state.pokemon.types;
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
}

export default withRouter(Pokemon);
