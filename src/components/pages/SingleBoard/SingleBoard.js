import React from 'react';
import { Link } from 'react-router-dom';
import './SingleBoard.scss';

class SingleBoard extends React.Component {
  render() {
    const { boardId } = this.props.match.params;
    return (
      <div className="SingleBoard">
        <h1>SINGLE BOARD</h1>
        <h2>Current Board Id is {boardId}</h2>
      </div>
    );
  }
}

export default SingleBoard;
