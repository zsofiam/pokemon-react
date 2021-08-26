import React from 'react';
import { Link } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import H1 from '../../elements/H1';
import Nav from '../../elements/Nav';

function Header(){
    return (
        <ThemeProvider theme={themeNormal}>
        <Nav>
            <H1>Pokémon</H1>
            <Link style={linkStyle} to="/pokemons">Pokemons</Link> |  
            <Link style={linkStyle} to="/types"> Types</Link>
        </Nav>
        </ThemeProvider>
    )
}

const themeFantasy = {
    fontFamily: 'Fantasy',
    fontSize: '3rem',
    color: '#a88532',
    background: '#a8327f',
    backgroundHover: '#a8326d'
};

const themeNormal = {
    fontFamily: 'sans-serif',
    fontSize: '2em',
    color: 'white',
    background: 'black',
    backgroundHover: '#444'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
