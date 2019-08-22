import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableRow from './TableRow/TableRow';
import Pagination from './Pagination/Pagination';
import TableSettings from './TableSettings/TableSettings';
import TableSettingsButton from './TableSettingsButton/TableSettingsButton';
import DocumentDetails from './DocumentDetails/DocumentDetails';
import documents from '../../data/documents.json';

class Documents extends Component {
    render() {
        const maxPerPage = 10;
        let maxPages = 2;
        if(this.props.data.length > 1){
            maxPages = Math.ceil(this.props.data.length / maxPerPage);        
        }

        const indexOfLastElement = this.props.currentPage * maxPerPage;
        const indexOfFirstElement = indexOfLastElement - maxPerPage;
        const currentPageContent = documents.slice(indexOfFirstElement, indexOfLastElement);
        const renderCurrentDocuments = currentPageContent.map(row => {
            return (
                <TableRow key={row._id} row={row} />
            )
        })

        const renderCurrentDocument = currentPageContent.filter(row => {
            return row._id === this.props.documentId
        }).map(document => {
            console.log(document);
            return (
                <DocumentDetails key={document._id} document={document}/>
            )
        });
        //console.log(renderCurrentDocument[0]);

        //console.log(currentPageContent);

        return (
            <div>
                <div className={"documents-wrapper" + (!this.props.documentsDisplay ? " invisible" : "")}>
                    <Pagination maxPages={maxPages} />
                    <TableSettings />
                    <TableSettingsButton />
                    <table>
                        <thead>
                            <tr className="head">
                                <th className={!this.props.dateOfCreation ? "invisible" : ""}><button onClick={() => this.props.sortByStringHandler('dateOfCreation')}>Date of Creation</button></th>
                                <th className={!this.props.dateOfRecording ? "invisible" : ""}><button onClick={() => this.props.sortByStringHandler('dateOfRecording')}>Date of Recording</button></th>
                                <th className={!this.props.status ? "invisible" : ""}><button onClick={() => this.props.sortByStringHandler('status')}>Status</button></th>
                                <th className={!this.props.transactionType ? "invisible" : ""}><button onClick={() => this.props.sortByStringHandler('transactionType')}>Transaction Type</button></th>
                                <th className={!this.props.businessPartner ? "invisible" : ""}>Business Partner</th>
                                <th className={!this.props.businessPartnerLocation ? "invisible" : ""}>Business Partner Location</th>
                                <th className={!this.props.year ? "invisible" : ""}>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderCurrentDocuments}
                        </tbody>
                    </table>
                </div>
                <div className="document-wrapper">
                    <div>
                        {this.props.documentId}
                        {renderCurrentDocument}

                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        dateOfCreation:  state.dateOfCreation,
        dateOfRecording: state.dateOfRecording,
        status:          state.status,
        transactionType: state.transactionType,
        businessPartner: state.businessPartner,
        businessPartnerLocation: state.businessPartnerLocation,
        year:            state.year,
        documentsDisplay: state.documentsDisplay,
        documentId: state.documentId
    }
};

export default connect(mapStateToProps, null)(Documents);