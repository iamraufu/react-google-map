import Map from './components/Map';
import './App.css';
import Direction from './components/Direction';
import { useState } from 'react';

function App() {
  const [origin,setOrigin] = useState('');
  const [destination,setDestination] = useState('');
  return (
    <div className="App">
      {/* <Map></Map> */}
      <input type="text" placeholder="Starting Point" onBlur = {e=>setOrigin(e.target.value)}/>
      <input type="text" placeholder="Destination" onBlur = {e=>setDestination(e.target.value)}/>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
