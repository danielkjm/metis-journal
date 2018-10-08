import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddEntry extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      date: '',
      entry: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const entry = {
      title: this.state.title,
      author: this.state.author,
      date: this.state.date,
      entry: this.state.entry
    };

    await axios.post('/api/entries', this.state);

    this.setState({
      title: '',
      author: '',
      date: '',
      entry: '',
      created: 'Entry Created!'
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="form-page">
        <Link to="/">
          <div className="back-arrow">&#60;</div>
        </Link>
        <div className="page-header">CREATE AN ENTRY</div>
        <form className="entry-form" onSubmit={this.handleSubmit}>
          <div className="name-title">
            <div className="entry-section">
              <label>Title</label>
              <input
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="entry-section">
              <label>Name</label>
              <input
                name="author"
                type="text"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </div>
            <div className="entry-section">
              <label>Date</label>
              <input
                name="date"
                type="text"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="entry-section">
            <label>Entry</label>
            <textarea
              name="entry"
              type="text"
              value={this.state.entry}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
