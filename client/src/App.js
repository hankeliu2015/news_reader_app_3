import React from 'react';
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import PostList from './components/PostList';
import './App.css';
import NewPostTutorial from './components/NewPostTutorial';

import StoriesContainer from './containers/storiescontainer';
import StoryComments from './containers/storycomments';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br></br>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>

        // <Route exact path="/" component={PostList} />
        <Route exact path="/" component={StoriesContainer} />
        <Route exact path='/storycomments/:id' component={StoryComments} />

        <Route exat path="/posts/new" component={NewPostTutorial} />
      </div>
    </Router>
  );
}

export default App;
