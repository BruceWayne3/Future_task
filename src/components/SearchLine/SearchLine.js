import React from 'react';

class SearchLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    changeValue = event => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return(
            <div className="container mb-3 mt-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-info" type="button" onClick={() => this.props.onSearch(this.state.value)}>Найти</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.value} onChange={this.changeValue}/>
                </div>
            </div>
        )
    }
}

export default SearchLine;
