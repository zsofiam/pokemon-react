import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import H1 from '../../elements/H1';
import Nav from '../../elements/Nav';
import ThemeContext from '../../context/ThemeContext';
import AppTheme from '../../Colors';


function Header(){
    
const theme = useContext(ThemeContext);
const currentTheme = AppTheme[theme];

    return (
        <ThemeProvider theme={currentTheme}>
        <Nav>
            <H1>Pokémon</H1>
            <span>Choose Theme:</span>
            <div></div>
            <button style={{margin: '10px 10px 10px 0px'}}>BlackAndWhite</button>
            <button style={{margin: ''}}>Fancy</button>
            <div></div>
            <Link style={linkStyle} to="/pokemons">Pokemons</Link> |  
            <Link style={linkStyle} to="/types"> Types</Link>
        </Nav>
        </ThemeProvider>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
