import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return (
        <nav style={headerStyle}>
            <h1>Pokémon</h1>
            <Link style={linkStyle} to="/pokemons">Pokemons</Link> |  
            <Link style={linkStyle} to="/types"> Types</Link>
        </nav>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
