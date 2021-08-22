import React, { Component } from "react";
import TypeItem from "./TypeItem";
import PropTypes from "prop-types";

class Types extends Component{

    render(){
        
        return this.props.types.map(type => (
            <TypeItem key={type.id} type = {type}/>
        ));
    }
}

// PropTypes:
Types.propTypes = {
    types: PropTypes.array.isRequired,
}

export default Types;