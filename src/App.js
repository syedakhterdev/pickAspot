import React, { Component } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Popup from './components/Popup/popup';
import { connect } from 'react-redux';
import { reservations } from '../src/store/actions/reservation.action'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            reservePos: ''
        }
    }

    handleOpen = () => {
        this.setState(
            { open: false }
        )
    }

    handleCloseDialog = () => {
        this.setState({ open: false });
    }
    handleSubmit = (e) => {
        this.setState({ open: true });
        e.preventDefault();
    }

    handleBookSpot = () => {
        this.props.reservationAddress && this.props.reservations(this.props.reservationAddress);
    }

    render() {
        const { reservationAddress } = this.props;
        return (
            <main className="wrapper">
                <Header />
                <div className="dashboard">
                    <Sidebar />
                    <Content handleSubmit={this.handleSubmit} />
                </div>
                <Footer />
                <Popup open={this.state.open} reservePos={reservationAddress} handleBookSpot={this.handleBookSpot} handleCloseDialog={this.handleCloseDialog} />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentReservation: state.stateReserve.currentReservation,
        reservationAddress: state.stateReserve.address,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reservations: (payload) => dispatch(reservations(payload)),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


