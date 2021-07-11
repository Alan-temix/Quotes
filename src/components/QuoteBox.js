import {useState, useEffect} from 'react';
import Button from './Button';
import SocialMedia from './SocialMedia';

const QuoteBox = ( {color, setColor} ) => {
    const [data, setData] = useState(null)
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        (async () => {
          let url = 'https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt';
          const jsonResponse = await fetch(url).then(res => res.json());
          setData(jsonResponse);
          setRandomNumber(Math.floor(Math.random() * 101))
        })()
      }, [])

      useEffect(() => {
        if(data) {
          setQuote(data['quotes'][randomNumber]['quote']);
          setAuthor(data['quotes'][randomNumber]['author']);
        }
      }, [data, randomNumber])

    return( 
        <div className="card container-quote">
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{quote}</p>
                </blockquote>
                <br />
                <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
                <div className="bottom-section">
                    <SocialMedia />
                    <Button nquotes={data ? data['quotes']['length'] : null} setRnumber={setRandomNumber} color={color} setcolor={setColor}/>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;