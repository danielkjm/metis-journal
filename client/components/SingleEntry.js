import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleEntry extends Component {
  constructor() {
    super();
    this.state = {
      entry: {}
    };
  }
  async componentDidMount() {
    const entryId = this.props.match.params.entryId;

    const entry = await axios.get(`/api/entries/${entryId}`);
    console.log(entry.data);
    this.setState({ entry: entry.data });
  }

  render() {
    return (
      <div>
        <Link to="/">
          <div className="back-arrow">&#60;</div>
        </Link>
        <div className="entry-box">
          <div className="entry-box-title">
            {this.state.entry.title} - {this.state.entry.author}
          </div>

          <div>{this.state.entry.entry}</div>
        </div>
      </div>
    );
  }
}
