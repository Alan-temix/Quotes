const Button = ({nquotes, setRnumber}) => {
    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={() => {
                setRnumber(Math.round(Math.random() * (nquotes - 0) + 0))
            }}>
                New Quote
            </button>
        </div>
    )
}

export default Button;