import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Regular } from './components/Regular';
import { Hot } from './components/Hot';
import ListMems from './data/ListMems';

class App extends Component {
  constructor() {
    super();
    this.state = { items: ListMems };
  };

  onUpVote = meme => {
    this.setState(prev => {
      return {
        items: prev.items.map(m => {
          if (m.id === meme.id)
            return {
              ...m,
              upvotes: m.upvotes + 1
            };
          return m;
        })
      };
    })
  }

  onDownVote = meme => {
    this.setState(prev => {
      return {
        items: prev.items.map(m => {
          if (m.id === meme.id)
            return {
              ...m,
              downvotes: m.downvotes + 1
            };
          return m;
        })
      };
    })
  }

  render = () => {
    return (<Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/Regular">Regular</Link>
          </li>
          <li>
            <Link to="/Hot">Hot Mems</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/Regular' element={< Regular memes={this.state.items}
            handleEventUp={this.onUpVote}
            handleEventDown={this.onDownVote} />}>
          </Route>
          <Route path='/Hot' element={< Hot memes={this.state.items}
            handleEventUp={this.onUpVote}
            handleEventDown={this.onDownVote} />}></Route>
        </Routes>
      </div>
    </Router>);
  };
}


export default App;