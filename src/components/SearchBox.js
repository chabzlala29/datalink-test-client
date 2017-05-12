import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Type in anything you desire..." value={this.state.query} onChange={this._handleChange.bind(this)} onKeyPress={this._handleEnter.bind(this)} />
            <span className="input-group-btn">
              <Button onClick={this._handleSearch.bind(this)}>Go!</Button>
            </span>
          </div>
        </div>
        <div className="col-md-2">
          <Button bsStyle="success" onClick={this._resetSearch.bind(this)}>Reset</Button>
        </div>
      </div>
    );
  }

  _handleEnter(event) {
    if (event.key === 'Enter') {
      this.props.onRefresh(this.state.query);
    }
  }

  _handleChange(event) {
    event.preventDefault();
    this.setState({ query: event.target.value });
  }

  _handleSearch(event) {
    event.preventDefault();

    this.props.onRefresh(this.state.query);
  }

  _resetSearch(event) {
    event.preventDefault();

    this.setState({ query: '' });
    this.props.onRefresh('');
  }
}

export default SearchBox;
