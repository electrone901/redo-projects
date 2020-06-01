/* eslint react/no-unused-state:0 */
import React, { Component } from 'react';

export class CampusInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ name: evt.target.value });
  }
  render() {
    return <input onChange={this.handleChange} />;
  }
}
