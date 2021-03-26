import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {API_KEY} from './config'
const containerStyle = {
  width: '100%',
  height: '100vh'
};

const location = {
  lat: 23.767110,
  lng: 90.421182
};

const onLoad = marker => {
      console.log('marker: ', marker)
    }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={14}
      >
            <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)