import logo from './logo.svg';
import { useState } from 'react';
import './App.css'
function App() {
  const[value, setvalue] = useState(0)
  return (
    <div className="App">
      {value}
    </div>
  );
}

export default App;
