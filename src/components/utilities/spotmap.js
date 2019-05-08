import React from 'react';
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import { reservations, currentSelection } from '../../store/actions/reservation.action'
const Map = compose(
  withStateHandlers(() => ({
    isMarkerShown: false,
    markerPosition: null,
  }), {
      onMapClick: ({ isMarkerShown }) => (e) => {
        return {
          markerPosition: e.latLng,
          isMarkerShown: true
        }
      }
    }),
  withScriptjs,
  withGoogleMap
)
  (props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      onClick={(e) => {
        props.onMapClick(e); props.currentSelection({
          latitude: e.latLng.lat(),
          longitude: e.latLng.lng()
        })
      }}
    >
      {props.isMarkerShown && <Marker position={props.markerPosition} />}
    </GoogleMap>
  )

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU66jkRZXL2Xo_8iVAvyH7ptV6AqCyYQo"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `350px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          reservations={this.props.reservations}
          allReservation={this.props.allReservation}
          currentSelection={this.props.currentSelection}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allReservation: state.stateReserve.allReservation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reservations: (payload) => dispatch(reservations(payload)),
    currentSelection: (payload) => dispatch(currentSelection(payload)),
    dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
