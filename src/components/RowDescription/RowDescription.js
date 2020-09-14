import React from 'react';
import './RowDescription.css';

function RowDescription(props) {
    const row = props.row;

    return (
        <div className="container mb-3 mt-3">
            <div className="row">
                <div className="col-6 description">
                    <p>Выбран пользователь <b>{row.firstName + ' ' + row.lastName}</b></p>
                    <p>Описание: <textarea defaultValue={row.description}/></p>
                    <p>Адрес проживания: <b>{row.address.streetAddress}</b></p>
                    <p>Город: <b>{row.address.city}</b></p>
                    <p>Провинция/штат: <b>{row.address.state}</b></p>
                    <p>Индекс: <b>{row.address.zip}</b></p>
                </div>
            </div>
        </div>
    )
}

export default RowDescription
