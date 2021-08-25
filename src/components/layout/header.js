import React from 'react';
import { Link } from "react-router-dom";
import styled, {ThemeProvider, css} from 'styled-components';

function Header(){
    return (
        <ThemeProvider theme={themeFantasy}>
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
    background: 'black'
};

const H1 = styled.h1`
color: ${(props) => props.theme.color};
font-size: ${(props) => props.theme.fontSize};
font-family: ${(props) => props.theme.fontFamily};

`;

const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    textAlign: center;
    padding: 10px;
    &:hover {
        background: ${(props) => props.theme.backgroundHover};
      }
`;

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
