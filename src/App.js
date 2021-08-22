import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header';
import Pokemons from './components/Pokemons';
import Types from './components/pages/Types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from './components/pages/Pokemon';
import axios from 'axios';

class App extends Component {
  state = {
    pokemons: [ 
    ],
    types: [
    ]
  }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => this.setState({pokemons: res.data.results}));
    axios.get('https://pokeapi.co/api/v2/type')
    .then(res => this.setState({types: res.data.results}));
  
  }

  render(){
   
    return(
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route path="/pokemons" render ={props => (
            <React.Fragment>
          <Pokemons pokemons = {this.state.pokemons}/>
            </React.Fragment>
          )}/>
          <Route path="/types" render ={props => (
            <React.Fragment>
          <Types types = {this.state.types}/>
            </React.Fragment>
          )}/>

<Route exact path="/pokemon/:id" render={({match}) => (
  <Pokemon pokemon={this.state.pokemons.find(p => p.id === match.params.id)} />
)} />

        </div>
      </div>
      </Router>
    );
  }
}

export default App;
