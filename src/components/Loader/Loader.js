import React from 'react';
import './Loader.css';

function Loader() {
    return (
        <div className="row justify-content-center">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
