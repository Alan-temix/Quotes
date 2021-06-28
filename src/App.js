import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  let colors = ['bgcolor-red', 'bgcolor-blue', 'bgcolor-green', 'bgcolor-yellow', 'bgcolor-purple', 'bgcolor-pink'];
  let r = Math.floor(Math.random() * 5);
  const [color, setColor] = useState(colors[r]);
  
  return (
    <div className={`App ${color}`}>
      {console.log(color)}
      <header className="App-header">
        <QuoteBox color={color} setColor={setColor} />
      </header>
    </div>
  );
}

export default App;
