import React, {useState, useEffect} from "react";
import TypeItem from "./TypeItem";
import PropTypes from "prop-types";
import axios from "axios";

const Types = ()=> {
        
    const [state, setState] = useState({
        types: [
        ]
      })

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res => setState({types: res.data.results}));
      }, [])

    return state.types.map(type => (
        <TypeItem key={type.id} type = {type}/>
    )); 
}

// PropTypes:
Types.propTypes = {
    types: PropTypes.array.isRequired,
}

export default Types;