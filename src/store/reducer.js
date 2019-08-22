const initialState = {
    currentPage: 0,
    maxPages: '',
    toggle: true,
    dateOfCreation: true, 
    dateOfRecording: true,
    status:          true,
    transactionType: true,
    businessPartner: true,
    businessPartnerLocation: true,
    year:           true,
    documentsDisplay: true,
    documentId: null, 
    documentDetailsDisplay: false
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case "SET_INITIAL_PAGE":
        return {
            ...state,
            currentPage: 1
        }

        case "SET_CURRENT_PAGE":{
            return {
                ...state,
                currentPage: parseInt(action.number)
            }
        }

        case 'NEXT_PAGE':
        if(state.currentPage === action.maxPages){
            return {
                ...state, 
                currentPage: parseInt(action.maxPages)
            }
        } else {
            return {
                ...state,
                currentPage: parseInt(state.currentPage + 1)
            }
        }

        case "PREVIOUS_PAGE":
        if(state.currentPage <= 1){
            return {
                ...state,
                currentPage: 1,
            }
        } else {
            return {
                ...state,
                currentPage: parseInt(state.currentPage - 1),
            }
        }

        case "TOGGLE":{
            return {
                ...state,
                toggle: !state.toggle
            }
        }

        case "DATE_OF_CREAT":{
            return {
                ...state,
                dateOfCreation: !state.dateOfCreation
            }
        }

        case "DATE_OF_RECORD":{
            return {
                ...state,
                dateOfRecording: !state.dateOfRecording
            }
        }

        case "STATUS":{
            return {
                ...state,
                status:  !state.status
            }
        }

        case "TRANSACTION_TYPE":{
            return {
                ...state,
                transactionType:  !state.transactionType
            }
        }

        case 'BUSINESS_PARTNER':{
            return {
                ...state,
                businessPartner:  !state.businessPartner
            }
        }

        case "BUSINESS_PARTNER_LOC":{
            return {
                ...state,
                businessPartnerLocation:  !state.businessPartnerLocation
            }
        }

        case "YEAR":{
            return {
                ...state,
                year:  !state.year
            }
        }
        case "DOCUMENTS_DISPLAY": {
            return {
                ...state,
                documentsDisplay: true
            }
        }

        case "DOCUMENT_DETAILS_DISPLAY": {
            return {
                ...state,
                documentsDisplay: false,
                documentId: parseInt(action.documentId),
                documentDetailsDisplay: true
            }
        }

        default:
        return state;
    }
};

export default reducer;