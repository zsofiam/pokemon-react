import React from 'react';
import { Link } from "react-router-dom";
import styled, {ThemeProvider, css} from 'styled-components';

function Header(){
    return (
        <ThemeProvider theme={themeDark}>
        <Nav>
            <H1>Pokémon</H1>
            <Link style={linkStyle} to="/pokemons">Pokemons</Link> |  
            <Link style={linkStyle} to="/types"> Types</Link>
        </Nav>
        </ThemeProvider>
    )
}

const themeDark = {
    primary: '#fff',
    secondary: 'teal'
};

const H1 = styled.h1`
color: #fff;
font-size: 3em;
font-family: Fantasy;
`;

const Nav = styled.nav`
    background: #333;
    color: #fff;
    textAlign: center;
    padding: 10px;
    &:hover {
        background: #444;
      }
`;

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
