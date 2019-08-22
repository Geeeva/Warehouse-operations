import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableRow extends Component {
	
	render () {
		return (
			<tr onClick={() => this.props.documentDetailsHandler(this.props.row._id)}>
				<td className={!this.props.dateOfCreation ? "invisible" : ""}>{this.props.row.dateOfCreation.substr(0, 10)}</td>
				<td className={!this.props.dateOfRecording ? "invisible" : ""}>{this.props.row.dateOfRecording.substr(0, 10)}</td>
				<td className={!this.props.status ? "invisible" : ""}>{this.props.row.status}</td>
				<td className={!this.props.transactionType ? "invisible" : ""}>{this.props.row.transactionType}</td>
				<td className={!this.props.businessPartner ? "invisible" : ""}>{this.props.row.businessPartner.name}</td>
				<td className={!this.props.businessPartnerLocation ? "invisible" : ""}>{this.props.row.businessPartner.address}</td>
				<td className={!this.props.year ? "invisible" : ""}>{this.props.row.year}</td>
			</tr>
		)
	}	
}

const mapStateToProps = state => {
    return {
        dateOfCreation:  state.dateOfCreation,
        dateOfRecording: state.dateOfRecording,
        status:          state.status,
        transactionType: state.transactionType,
        businessPartner: state.businessPartner,
        businessPartnerLocation: state.businessPartnerLocation,
		year:            state.year,
		documentsDisplay: state.documentsDisplay
    }
};

const mapDispatchToProps = dispatch => {
    return {
        documentDetailsHandler: (documentId) => dispatch({type: 'DOCUMENT_DETAILS_DISPLAY', documentId}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);