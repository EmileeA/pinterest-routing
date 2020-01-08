import React from 'react';

import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

import Board from '../../shared/Board/Board';

import './Home.scss';

class Home extends React.Component {
  state = {
    boards: [],
  }

  // you do your axios calls where the state is

  getBoards = () => {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('error from get boards', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  deleteBoard = (boardId) => {
    boardData.deleteBoard(boardId)
      .then()
      .catch((error) => console.error('error delteing board', error));
  }

  render() {
    return (
      <div className="Home">
        <h1>HOME</h1>
        <div className="boards d-flex flex-wrap">
          {this.state.boards.map((board) => <Board key={board.id} board={board} deleteBoard={this.deleteBoard} />)}
        </div>
      </div>
    );
  }
}

export default Home;
