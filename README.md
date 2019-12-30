# Candy Crush Game : Tractable Task

## Summary

Objective of the game is to remove the matching tiles, until there are no matching tiles left.

## Available Scripts

In the project directory, you can run:

### `yarn`

This will install the necessary dependencies from the package

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

## Code Points

About the structure of the app.
App consists of following structure:
├── App.js
├── App.scss
├── App.test.js
├── Constants.js
├── Helper.js
├── components
│   ├── GridBoard.js
│   └── ScoreCard.js
├── index.css
├── index.js
├── serviceWorker.js
└── setupTests.js

- **App** initial component for loading other components
- This component initializes the whole board.
- **GridBoard** Component to generate the board.
- **ScoreCard** component for showing the scores of the game
- **Helper** contains all the helper functions used by the app
- **Constants** holds the board size and colors in this.

## Features

- Upon clicking of a tile if there are any matching neighbours to it then all those tiles will be remove from the board.
- After the tiles are removed empty tiles gets pushed on the top of board, so that remaining tiles comes falling down.
- Score shows actively how many tiles are removed from the game.
- When you have remove all tiles, it wlll show the message **It's a perfect. Congratulations**


## Development Environment
* App is created using Create React App.
* For styling, SASS is used.
* Prettier is used to format the code