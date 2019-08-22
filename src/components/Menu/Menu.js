import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Menu extends Component {
    render () {
        return (
            <nav>
                <ul className="menu">
                    <NavLink className="home" to="/" exact activeStyle={{color: '#000000'}}><li>Home</li></NavLink>
                    <NavLink className="documents" to="/documents" exact activeStyle={{color: '#000000'}}><li onClick={this.props.documentsDisplayHandler}>Documents</li></NavLink>
                    <NavLink className="about" to="/about" exact activeStyle={{color: '#000000'}}><li>About</li></NavLink>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
		documentsDisplay: state.documentsDisplay
    }
};

const mapDispatchToProps = dispatch => {
    return {
        documentsDisplayHandler: () => dispatch({type: 'DOCUMENTS_DISPLAY'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);