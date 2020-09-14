import React from 'react';
import './AddRow.css';

function AddRow(props) {
    return (
        <div className="container addrow mt-3">
            <form onSubmit={props.submitHandle}>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="id" name="id" onChange={props.changeHandle} required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="firstName" name="firstName" onChange={props.changeHandle} required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="lastName" name="lastName" onChange={props.changeHandle} required/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="email" name="email" onChange={props.changeHandle} required/>
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" placeholder="phone" name="phone" onChange={props.changeHandle} required/>
                    </div>
                </div>
                <button className="btn btn-info">Добавить в таблицу</button>
            </form>
        </div>
    )
}

export default AddRow
