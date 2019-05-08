import React, { Component } from 'react';
import Spotmap from '../utilities/spotmap';
import SpotSearch from '../utilities/spotSearch';
import LocationCard from './locationCards/LocationCards';

class Content extends Component {
    render() { 
        const { handleSubmit } = this.props;
        return ( 
            <div className="spot-wrap">
                <div className="spot-inner">
                    <SpotSearch handleSubmit = { handleSubmit }/>
                    <div className="spot-map">
                        <Spotmap/>
                    </div>
                    <LocationCard/>
                </div>
            </div>
         );
    }
}

export default Content;