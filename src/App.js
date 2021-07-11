import './App.css';
import {useEffect, useState} from 'react';
import QuoteBox from './components/QuoteBox';

function App() {
  const [color, setColor] = useState(['bgcolor-red', 'bgcolor-blue', 'bgcolor-green', 'bgcolor-yellow', 'bgcolor-purple', 'bgcolor-pink']);

  useEffect(() => {
    if(typeof color === 'object') {
      setColor(color[Math.floor(Math.random() * color.length)])
    }
  }, [color])
  
  return (
    <div className={`App ${color}`}>
      <header className="App-header">
        <QuoteBox color={color} setColor={setColor} />
      </header>
    </div>
  );
}

export default App;
