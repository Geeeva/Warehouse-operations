import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableSettings extends Component {
    render () {   
        return (
            <div className={"table-settings" + (this.props.toggle ? ' invisible' : '')}>
                <label>
                    Date of Creation:
                <input
                    name="dateOfCreation"
                    type="checkbox"
                    checked={this.props.dateOfCreation}
                    onChange={this.props.dateOfCreationHandler}/>
                </label>
                <label>
                    Date of Recording:
                <input
                    name="dateOfRecording"
                    type="checkbox"
                    checked={this.props.dateOfRecording}
                    onChange={this.props.dateOfRecordingHandler} />
                </label>
                <label>
                    Status:
                <input
                    name="status"
                    type="checkbox"
                    checked={this.props.status}
                    onChange={this.props.statusHandler} />
                </label>
                <label>
                    Transaction type:
                <input
                    name="transactionType"
                    type="checkbox"
                    checked={this.props.transactionType}
                    onChange={this.props.transactionTypeHandler} />
                </label>
                <label>
                    Business Partner:
                <input
                    name="businessPartner"
                    type="checkbox"
                    checked={this.props.businessPartner}
                    onChange={this.props.businessPartnerHandler} />
                </label>
                <label>
                    Business Partner Location:
                <input
                    name="businessPartnerLocation"
                    type="checkbox"
                    checked={this.props.businessPartnerLocation}
                    onChange={this.props.businessPartnerLocationHandler} />
                </label>
                <label>
                    Year:
                <input
                    name="year"
                    type="checkbox"
                    checked={this.props.year}
                    onChange={this.props.yearHandler} />
                </label>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toggle: state.toggle,
        dateOfCreation:  state.dateOfCreation,
        dateOfRecording: state.dateOfRecording,
        status:          state.status,
        transactionType: state.transactionType,
        businessPartner: state.businessPartner,
        businessPartnerLocation: state.businessPartnerLocation,
        year:            state.year,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dateOfCreationHandler: () => dispatch({type: 'DATE_OF_CREAT'}),
        dateOfRecordingHandler: () => dispatch({type: 'DATE_OF_RECORD'}),
        statusHandler: () => dispatch({type: 'STATUS'}),
        transactionTypeHandler: () => dispatch({type: 'TRANSACTION_TYPE'}),
        businessPartnerHandler: () => dispatch({type: 'BUSINESS_PARTNER'}),
        businessPartnerLocationHandler: () => dispatch({type: 'BUSINESS_PARTNER_LOC'}),
        yearHandler: () => dispatch({type: 'YEAR'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableSettings);