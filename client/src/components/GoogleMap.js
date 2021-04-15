//note: code formatted for ES6 here
import React, { Component } from 'react'; 
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
        
        </Map>
      )
    }
  }


  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCVPTG5ZTA0E6LEpfp_9rRNDS0H8xv2Y4g')
  })(MapContainer)