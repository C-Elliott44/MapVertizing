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
        lat: 32.97821257510396,
        lng: -117.24843692448304
      },
      zoom: 10
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
            this.props.gotData.map((coordinateItem) => {
              console.log(coordinateItem.lat, coordinateItem.long)
              return (<AnyReactComponent
              lat={coordinateItem.lat}
              lng={coordinateItem.long}
            />)})}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;