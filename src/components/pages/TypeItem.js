import React, {Component} from 'react';
import PropTypes from "prop-types";

export class TypeItem extends Component{
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
        const{id,name} = this.props.type;
        return (
            <div style={this.getStyle()}>
                <p>
                {' '}
                {name}
                {/* <button style={btnStyle}
                onClick={this.props.delTodo.bind(this, id)}></button> */}
                </p>
            </div>
        )
    }  
}

// PropTypes:
TypeItem.propTypes = {
    type: PropTypes.object.isRequired
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

export default TypeItem;
