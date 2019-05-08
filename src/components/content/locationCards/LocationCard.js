import React, { Component } from 'react';
import SpotMap from '../../utilities/spotmap';
import { connect } from 'react-redux';
import { CancelReservations } from '../../../../src/store/actions/reservation.action'

class LocationCard extends Component {
    handleCancelSpot = (selectedSpot) => {
        this.props.CancelReservations(selectedSpot);
    }
    render() {
        return (
            this.props.allReserveAdress.map(address => {
                return <div className="convers-box">
                    <div className="box-inner">
                        <div className="map-icon">
                            <SpotMap />
                        </div>
                        <div className="box-bottom">
                            <h4>Reserve</h4>
                            <ul className="stars">
                                <li><a href="#" className="fa fa-star" aria-hidden="true"></a></li>
                                <li><a href="#" className="fa fa-star" aria-hidden="true"></a></li>
                                <li><a href="#" className="fa fa-star" aria-hidden="true"></a></li>
                                <li><a href="#" className="fa fa-star-half-o" aria-hidden="true"></a></li>
                                <li><a href="#" className="fa fa-star-o" aria-hidden="true"></a></li>
                            </ul>
                            <p>
                                {address}
                            </p>
                            <div className="time">
                                <h5>
                                    Total time
                                <span>4 hours</span>
                                </h5>
                                <button onClick={() => this.handleCancelSpot(address)}>Cancel Spot</button>
                            </div>
                        </div>
                    </div>
                </div>
            })
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allReserveAdress: state.stateReserve.allReservation,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        CancelReservations: (payload) => dispatch(CancelReservations(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);