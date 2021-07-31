import './App.css';
import {useEffect, useState} from 'react';
import QuoteBox from './components/QuoteBox';

function App() {
  const [color, setColor] = useState(['050f2c', '003666', '00aeff', '3369e7', '8e43e7', 'b84592', 'ff4f81', 'ff6c5f', 'ffc168', '2dde98', '1cc7d0']);

  useEffect(() => {
    if(typeof color === 'object') {
      setColor(color[Math.floor(Math.random() * 6)])
    }
  }, [color])
  
  return (
    <div className={`App bgcolor-${color}`}>
      <header className="App-header">
        <QuoteBox setColor={setColor} />
      </header>
    </div>
  );
}

export default App;
