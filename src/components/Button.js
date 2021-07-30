const Button = ({nquotes, setRnumber, setColor}) => {
    let colorList = ['050f2c', '003666', '00aeff', '3369e7', '8e43e7', 'b84592', 'ff4f81', 'ff6c5f', 'ffc168', '2dde98', '1cc7d0'];
    return(
        <div>
            <button type="button" className="btn btn-primary" onClick={() => {
                setRnumber(Math.round(Math.random() * (nquotes - 0) + 0))
                setColor(colorList[Math.floor(Math.random() * 6)])
            }}>
                New Quote
            </button>
        </div>
    )
}

export default Button;