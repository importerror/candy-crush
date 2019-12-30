import "./App.scss";

import { GRID_SIZE, GRID_TOTAL_SIZE } from "./Constants";
import React, { Component } from "react";
import { getCellPosition, getMatches } from "./Helper";

import { COLORS } from "./Constants";
import GridBoard from "./components/GridBoard";
import ScoreCard from "./components/ScoreCard";

export default class App extends Component {
  state = {
    grid: [],
    matchedCells: [],
    score: 0
  };

  _initGrid = () => {
    // Initialize the grid with `null` on load of the apps
    let nullArray = [...new Array(GRID_SIZE).fill(null)];
    let grid = [];
    nullArray.map(arr => grid.push(nullArray));
    this.setState({ grid });
  };

  _generateBoard = () => {
    // Generate the random colors in the board
    let { grid } = this.state;

    // populate with random colors in the grid
    let coloredGrid = grid.map(row =>
      row.map(() => COLORS[Math.floor(Math.random() * COLORS.length)])
    );
    
    console.log("called")
    this.setState({ grid: coloredGrid, score: 0 });
  };

  _handleClick = e => {
    let matchArray = [];

    // get color of the tile clicked
    let color = e.target.getAttribute("data-color");

    // get position of the tile clicked
    let [x, y] = getCellPosition(e.target.getAttribute("data-position"));

    // find matching neighbouring tiles recursively of the selected tile
    getMatches(parseInt(x), parseInt(y), color, matchArray, this.state.grid);

    // don't allow single tile to be removed
    // if there is no matching neighbours around it
    if (matchArray.length > 1) {
      this._rearrangeGrid(matchArray);
    }
  };

  // Function to find the matched tiles and remove it from the grid
  _rearrangeGrid = matchedCells => {
    let matchArrayObj = matchedCells;

    // sort the matched array according to max column size
    // this will maintain the index of array
    // when popping out of the array
    let matchArray = matchArrayObj
      .map(cell => Object.keys(cell))
      .sort()
      .reverse();

    // create the clone of the array (immutability)
    let ActualArray = JSON.parse(JSON.stringify(this.state.grid));

    // Remove the array which are matched
    matchArray.map(cell => {
      let data = cell[0].split(",");
      let xCoordinate = parseInt(data[0]);
      let yCoordinate = parseInt(data[1]);
      ActualArray[xCoordinate].splice(yCoordinate, 1);
    });

    // push `null` to those columns which have been removed
    matchArray.map(cell => {
      let data = cell[0].split(",");
      let xCoordinate = parseInt(data[0]);
      ActualArray[xCoordinate].unshift(null);
    });

    // get the score of the game
    let count = matchedCells.length + this.state.score;

    this.setState({ grid: ActualArray, score: count });
  };

  UNSAFE_componentWillMount() {
    this._initGrid();
  }

  componentDidMount() {
    this._generateBoard();
  }

  render() {
    let { grid, score } = this.state;

    return (
      <div className="container">
        <GridBoard grid={grid} handleClick={this._handleClick} />

        <ScoreCard totalScore={GRID_TOTAL_SIZE} score={score} />

        <div
          className="btn btn-orange standard-margin"
          onClick={e => this._generateBoard(e)}
        >
          New Game
        </div>
      </div>
    );
  }
}
