import React, {Component} from 'react';
import {connect} from 'react-redux';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.props.nextHandler(this.props.maxPages);
    }

    render () {   
        const pageNumbers = [];
        for (let i = 1; i <= this.props.maxPages; i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    className={(this.props.currentPage === number? 'active' : '')}
                    key={number}
                    id={number}
                    onClick={(event) => this.props.currentPageHandler(event.target.textContent)}
                >
                {number}
              </li>
            );
        });

        return (
            <div className="pagination">
                <button onClick={this.props.previousHandler}>&#8249;</button>
                <ul className="numbers">{renderPageNumbers}</ul>
                <button className="next" onClick={() => this.props.nextHandler(this.props.maxPages)}>&#8250;</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        nextHandler: (maxPages) => dispatch({type: 'NEXT_PAGE', maxPages}),
        currentPageHandler: (number) => dispatch({type: 'SET_CURRENT_PAGE', number}),
        previousHandler: () => dispatch({type: 'PREVIOUS_PAGE'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);