import React, { Component } from 'react';
import LocationCard from './LocationCard';
import './LocationCards.css'
import ReservationList from './ReservationList';

class LocationCards extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="convers-row">
                <LocationCard/> 
                {/* <LocationCard/>
                <LocationCard/>
                <LocationCard/>
                <LocationCard/>
                <ReservationList/> */}
            </div>
         );
    }
}
 
export default LocationCards;