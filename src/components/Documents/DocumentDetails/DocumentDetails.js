import React from 'react';
const documentDetails = props => {
    const year = props.document.dateOfCreation.slice(0, 4);

    const months = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October",
    11: "November", 12: "Decmber"};

    const days = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};

    const monthExtracted = props.document.dateOfCreation.slice(5, 7);
    let monthSliced;
    let monthName = "";
    let dayOfTheWeekName = '';
    let daySliced = props.document.dateOfCreation.slice(5, 7);
    if(monthExtracted.startsWith("0")){
        monthSliced = monthExtracted.slice(1, 3);
    }

    Object.entries(months).map(m =>{
        if(m[0] === monthSliced){
            return monthName = m[1];
        }
    });

    const extractedDate = props.document.dateOfCreation.slice(0, 10);
    const date = new Date(extractedDate);
    const dayOfTheWeek = date.getDay();
  
    Object.entries(days).map(day => {
        if(day[0] === dayOfTheWeek){
            return dayOfTheWeekName = day[1];
        }
    });

    return (
        <div className="document-details-wrapper">
            <div className="status-wrapper">
                <div>
                    <p>Transaction Type: {props.document.transactionType}</p>
                    <p>Date Of Creation: {dayOfTheWeekName}, {monthName} {daySliced}, {year} </p>
                </div>
                <div>
                    <p>Business Partner {props.document.businessPartner.name}</p>              
                    <p>{props.document.businessPartner.city}</p>
                    <p>{props.document.businessPartner.address}</p>
                </div>
                <div>Status: {props.document.status}</div>
            </div>
            <div className="form-wrapper">
            <input
                className={"price" + (this.state.transformed === true ?
                        ' transformed' : '')} 
                type="text"
                placeholder={(this.state.transformed === true ? 
                        'Search...' : "")}
                maxLength="20"
                value={this.state.search} required
                onChange={this.updatedSearch.bind(this)}
            />

            </div>
        </div>

    );
}

export default documentDetails;