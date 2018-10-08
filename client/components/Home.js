import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="title">Everybody's Journal</div>
        <div className="entry-functions">
          <Link to="/addEntry">
            <div className="add-entry">Add Entry</div>
          </Link>
          <div className="entries">
            {this.state.entries.map(entry => {
              return (
                <div key={entry.title} className="entry">
                  <div className="entry-title">"{entry.title}" </div>
                  <div> - {entry.author}</div>
                  <div>{entry.date}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
