import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, withGoogleMap, GoogleMap, Marker } from 'google-maps-react';


export class Map extends React.Component {

  //There's a lot of examples online about adding markers, but they have a lot of state
  //interaction and it gets pretty fucky fast
  // Make sure you have 'google-maps-react'
 
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  // This is what gets the user position when the component mounts. 
  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return <Map google={google} initialCenter={userLocation} zoom={10} />;
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKZBKLM1fXpOndMjbwXsD3o7x1Seu_-vQ'
})(MapContainer);
