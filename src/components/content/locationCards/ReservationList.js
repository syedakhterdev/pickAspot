import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CancelReservations } from '../../../../src/store/actions/reservation.action'

class ReservationList extends Component {
    handleCancelSpot = (selectedSpot) =>{
        this.props.CancelReservations(selectedSpot);
    }
    render() {
        return (
            <div>
                <p>All Reservation List:</p>
                {
                    this.props.allReservation.map(reservation => {
                        return (
                            <div>
                                <span>{reservation.latitude}</span>
                                <button style={{ marginLeft: '30px'}} onClick ={() => this.handleCancelSpot(reservation)}>Cancel Spot</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allReservation: state.stateReserve.allReservation,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        CancelReservations: (payload) => dispatch(CancelReservations(payload)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReservationList);