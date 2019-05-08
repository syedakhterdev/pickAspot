import * as Constants from '../constants/action';

export function currentSelection(currentReserve) {
    return dispatch => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentReserve.latitude},${currentReserve.longitude}&key=AIzaSyCU66jkRZXL2Xo_8iVAvyH7ptV6AqCyYQo`)
            .then(response => {
                return (response.json())
            })
            .then(data => {
                dispatch({
                    type: Constants.CURRENT_RESERVATION,
                    payload: {currentReserve, address: data.results[0].formatted_address}
                });
                return data.results;
            })
            .catch(error => console.log("fetching address error"));
    };
}


export function reservations(stateReserve) {
    return {
        type: Constants.ADD_RESERVATION,
        payload: stateReserve
    };
}

export function CancelReservations(stateReserve) {
    return {
        type: Constants.CANCEL_RESERVATION,
        payload: stateReserve
    };
}
