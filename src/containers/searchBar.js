import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {term: ''}
    }

    onInputChange(event) {
     this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(event) => this.onFormSubmit(event)} className="form-group">
                <input
                placeholder="Get a five days"
                className="form-control"
                value={this.state.term}
                onChange={(event) => this.onInputChange(event)} 
                />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}