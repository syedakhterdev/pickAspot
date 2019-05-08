import * as Constants from '../constants/action';

const initialState = {
    currentReservation: [
        {
            latitude: 30.945043,
            longitude: -97.538246,
        }
    ],
    address: '',
    allReservation: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.CURRENT_RESERVATION:
            return Object.assign({}, state, {
                currentReservation: action.payload.currentReserve,
                address: action.payload.address
            });
        case Constants.ADD_RESERVATION:
            return Object.assign({}, state, {
                allReservation: state.allReservation.concat(action.payload)
            });
        case Constants.CANCEL_RESERVATION:
            return Object.assign({}, state, {
                allReservation: state.allReservation.filter(allReser => allReser !== action.payload)
            });
        default:
            return state
    }
}