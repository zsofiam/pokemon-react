import React from 'react';
import PropTypes from "prop-types";
import '../Item.css';

const TypeItem = (props) => {
    
        const{id,name} = props.type;
        return (
            <div className="card" style={getStyle()}>
                <p>
                {' '}
                {name}
                </p>
            </div>
        )
    
}

const getStyle =  {
        
    backgroundColor:'#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textAlign: 'left'
}

// PropTypes:
TypeItem.propTypes = {
    type: PropTypes.object.isRequired
}


export default TypeItem;
