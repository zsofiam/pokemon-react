import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './Item.css';

export class PokemonItem extends Component{
    getStyle = () => {
        return{
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'left',
            cursor: 'pointer'
        }
    }
    
    render(){
        const{name} = this.props.pokemon;
        const id = this.props.id;
        return (
            <div className="card" style={this.getStyle()}>
                <p>
                <Link style={linkStyle} to={`/pokemon/${id}`}>
                {' '}
                {name}
                {}
                </Link>
                </p>
            </div>
        )
    }  
}

const linkStyle = {

}

// PropTypes:
PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired
}

/* const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
} */

export default PokemonItem;
