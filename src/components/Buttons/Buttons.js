import React from 'react';
import './Buttons.css';

function Buttons(props) {
    const smallUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    return (
        <div className="container buttons">
            <button className="btn btn-info" onClick={() => props.onSelect(smallUrl)}>Маленький объем данных</button>
            <button className="btn btn-info" onClick={() => props.onSelect(bigUrl)}>Большой объем данных</button>
        </div>
    )
}

export default Buttons;
