import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      entries: []
    };
  }
  async componentDidMount() {
    const entries = await axios.get('/api/entries');
    this.setState({ entries: entries.data });
  }

  render() {
    return (
      <div className="home">
        <div className="entries">
          {this.state.entries.map(entry => {
            return (
              <div key={entry.title} className="entry">
                {entry.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
