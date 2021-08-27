import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import H1 from '../../elements/H1';
import Nav from '../../elements/Nav';
import ThemeContext from '../../context/ThemeContext';
import AppTheme from '../../Colors';
import ThemeToggler from "./ThemeToggler";


function Header(){
    
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <ThemeProvider theme={currentTheme}>
        <Nav>
            <H1>Pokémon</H1>
            <Link style={linkStyle} to="/pokemons">Pokemons</Link> |  
            <Link style={linkStyle} to="/types"> Types</Link>
            <ThemeToggler />
        </Nav>
        </ThemeProvider>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
