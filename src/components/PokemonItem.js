import React from 'react';
import { Link } from "react-router-dom";
import './Item.css';

const PokemonItem = (props) => {
    const getStyle =  {
        
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'left',
            cursor: 'pointer'
    }
    
        const{name} = props.pokemon;
        const id = props.id;
        return (
            <div className="card" style={getStyle}>
                <p>
                <Link to={`/pokemon/${id}`}>
                {' '}
                {name}
                {}
                </Link>
                </p>
            </div>
        )
}

export default PokemonItem;
