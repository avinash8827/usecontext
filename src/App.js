import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Perent from './Perent';

export const Friends = createContext();

function App() {
  const [name,setName] = useState(["ritik ","avinash"]);
  return (
    <Friends.Provider value={name}>
      <div className="App">
     
        <header className="App-header">
           <Perent/>
        </header>
        
      </div>
    </Friends.Provider>
    
  );
}

export default App;
