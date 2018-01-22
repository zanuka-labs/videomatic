import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  render() {
    return (
    <div>
      <input onChange={event => this.setState({ searchTerm: event.target.value })} />
    </div>
    );
  }
}

export default SearchInput;
