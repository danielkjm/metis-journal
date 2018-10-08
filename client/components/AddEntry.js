import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddEntry extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="form-page">
        <form className="entry-form" onSubmit={this.handleSubmit}>
          <div className="entry-section">
            <label>Title</label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="entry-section">
            <label>Entry</label>
            <textarea
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>

        {
          <h4>
            {this.state.created === undefined ? null : this.state.created}
          </h4>
        }
      </div>
    );
  }
}
