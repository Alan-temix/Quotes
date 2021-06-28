import {useState} from 'react';
import quotes from './quotes.json';
import Button from './Button';
import SocialMedia from './SocialMedia';

const QuoteBox = ( {color, setColor} ) => {
    const [rnumber, setRnumber] = useState(Math.floor(Math.random() * quotes['quotes']['length']));
    let quote = quotes['quotes'][rnumber]['quote'];
    let author = quotes['quotes'][rnumber]['author'];

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
                    <Button nquotes={quotes['quotes']['length']} setRnumber={setRnumber}/>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;