import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/map.css'



const AnyReactComponent = (props) => {
  const coordinates = props.dataPoints;
  
  return (
    <div className="dataPoint">
    </div>
  );
};
 
class SimpleMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 32.715736,
        lng: -117.161087
      },
      zoom: 13,
      dataPoints: [
        {lat: 32.711716, lng: -117.163087},
        {lat: 32.712726, lng: -117.164087},
        {lat: 32.713736, lng: -117.165087},
        {lat: 32.714746, lng: -117.166087},
        {lat: 32.715756, lng: -117.167087},
        {lat: 32.716766, lng: -117.168087}
      ]
    }
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='map' style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0fgzm00Nx4vGdj6EqJTA8oGBgOQkKj60' }}
          center={this.state.center}
          zoom={this.state.zoom}
        >

          {
            this.state.dataPoints.map((coordinateItem) => {
              return (<AnyReactComponent
              lat={coordinateItem.lat}
              lng={coordinateItem.lng}
            />)})}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;