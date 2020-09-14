import React from 'react';
import './Table.css';

function Table(props) {
    if(props.data === '') {
        return null;
    };

    if(props.data === null) {
      return null;
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <th scope="col" onClick={props.onSort.bind(null, 'id')}>id {props.sortField === 'id' ? <small>{props.sortIcon}</small> : null}</th>
                  <th scope="col" onClick={props.onSort.bind(null, 'firstName')}>firstName {props.sortField === 'firstName' ? <small>{props.sortIcon}</small> : null}</th>
                  <th scope="col" onClick={props.onSort.bind(null, 'lastName')}>lastName {props.sortField === 'lastName' ? <small>{props.sortIcon}</small> : null}</th>
                  <th scope="col" onClick={props.onSort.bind(null, 'email')}>email {props.sortField === 'email' ? <small>{props.sortIcon}</small> : null}</th>
                  <th scope="col" onClick={props.onSort.bind(null, 'phone')}>phone {props.sortField === 'phone' ? <small>{props.sortIcon}</small> : null}</th>
                </tr>
              </thead>
              <tbody>
                {props.data.map((item, i) => (
                    <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                        <th scope="row">{item.id}</th>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default Table;
