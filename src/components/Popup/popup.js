import React, { Component } from 'react';
import SpotMap from '../utilities/spotmap';
import './popup.css';


class Popup extends Component {
    render() {
        const { open, reservePos, handleBookSpot, handleCloseDialog } = this.props;
        return (
            <div className={` popup-wrap ${open ? 'show' : 'close'}`}>
                <div className="popup-box">
                    <div className="title">
                        <h3>Make a reservation</h3>
                    </div>
                    <div className="popup-content">
                        <div className="row popup-row">
                            <div className="col-lg-4">
                                <div className="info">
                                    <h5>235 Westferry Rd Parking</h5>
                                    <ul>
                                        <li>Surface Lot</li>
                                        <li>38 Spaces</li>
                                        <li>£££</li>
                                    </ul>
                                    {reservePos && <p><strong>Current Reserve Spot</strong>: {reservePos} </p>}
                                    {/* <p>London, Greater London E14 3SN, UK</p>
                                    <p><a href="#">+44 7949 062 765</a></p>
                                    <p><a href="#">+44 7956 428 396Tow</a></p> */}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="time-box">
                                    <form>
                                        <div className="form-group">
                                            <label>Time</label>
                                            <input type="tex" className="form-control" placeholder="Start time" />
                                            <input type="tex" className="form-control" placeholder="End time" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="popup-map">
                                    <SpotMap />
                                </div>
                            </div>
                        </div>
                        <div className="row popup-row">
                            <div className="rate-sec">
                                <h4>Rates</h4>
                                <span>Mon-Sun</span>
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="row popup-row align-items-end">
                            <div className="col-md-6 pl-0">
                                <div className="hours-sec">
                                    <h4>Hours of Operation</h4>
                                    <span>Mon-Sun</span>
                                    <span>24 Hours</span>
                                </div>
                            </div>
                            <div className="col-md-6 pr-0">
                                <div className="btns">
                                    <a href="#" className="btn btn-primary" onClick= {() => handleBookSpot()}>Book Now</a>
                                    <a href="#" className="btn btn-primary" onClick= {() => handleCloseDialog()}>Cancel a Spot</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup