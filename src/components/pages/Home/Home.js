import React from 'react';
// this makes the a tags work (you do the curly braces becaus eyou don't want to import the whole package - just that element)
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="Home">
        <h1>HOME</h1>
        <Link className="btn btn-primary" to="/board/new">Create New Board</Link>
        <Link className="btn btn-primary" to={`/board/${boardId}`}>New Board Page</Link>
      </div>
    );
  }
}

export default Home;
