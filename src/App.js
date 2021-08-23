import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/header';
import Pokemons from './components/Pokemons';
import Types from './components/pages/Types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from './components/pages/Pokemon';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    pokemons: [ 
    ],
    types: [
    ]
  })

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setState({pokemons: res.data.results}));
  }, [])

   
    return(
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route path="/pokemons" render ={props => (
            <React.Fragment>
          <Pokemons pokemons = {state.pokemons}/>
            </React.Fragment>
          )}/>
          <Route path="/types" render ={props => (
            <React.Fragment>
          <Types/>
            </React.Fragment>
          )}/>

          <Route exact path="/pokemon/:id" render={({match}) => (
            <Pokemon pokemon={state.pokemons.find(p => p.id === match.params.id)} />
          )} />

        </div>
      </div>
      </Router>
    );
  }


export default App;
