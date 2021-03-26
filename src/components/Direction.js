import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import { API_KEY } from './config'
const containerStyle = {
      width: '100%',
      height: '100vh'
};

const location = {
      lat: 23.767110,
      lng: 90.421182
};

function Direction({origin,destination}) {
      const [directionResponse, setDirectionResponse] = useState(null);
      return (
            <LoadScript
                  googleMapsApiKey={API_KEY}
            >
                  <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={14}
                  >
                        {origin !=='' && destination !=='' && <DirectionsService
                              options={{
                                    destination: origin,
                                    origin: destination,
                                    travelMode: 'DRIVING'
                              }}
                              callback={res => {
                                    if (res !== null) {
                                          setDirectionResponse(res);
                                    }
                              }}
                        />}
                        {directionResponse && <DirectionsRenderer
                              options={{
                                    directions: directionResponse
                              }}
                        />}
                  </GoogleMap>
            </LoadScript>
      )
}

export default React.memo(Direction)