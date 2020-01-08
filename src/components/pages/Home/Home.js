import React from 'react';
// this makes the a tags work (you do the curly braces becaus eyou don't want to import the whole package - just that element)
import { Link } from 'react-router-dom';
import boardData from '../../../helpers/data/boardData';
import authData from '../../../helpers/data/authData';
import Board from '../../shared/Board/Board';
import './Home.scss';

class Home extends React.Component {
  state = {
    boards: [],
  };

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
    // this is setting the state of boards
      .then((boards) => this.setState({ boards }))
      .catch((error) => console.error('errpr from get boards', error));
  }

  render() {
    const boardId = '12345';
    return (
      <div className="Home">
        <h1>HOME</h1>
        <div className="boards d-flex flex-wrap">
        {this.state.boards.map((board) => <Board key={board.id} board={board} />)}
      </div>
      </div>
    );
  }
}

export default Home;
