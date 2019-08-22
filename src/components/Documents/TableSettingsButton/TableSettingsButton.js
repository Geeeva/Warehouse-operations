import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableSettingsButton extends Component {
    render() {
        return (
            <button className={"table-settings-button" + (!this.props.toggle ? " close" : "")} onClick={this.props.toggleHandler}>
            {this.props.toggle ? "Open table settings" : "Close table settings"}
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {
        toggle: state.toggle
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleHandler: () => dispatch({type: 'TOGGLE'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSettingsButton);