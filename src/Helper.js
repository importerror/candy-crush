/**
 * @param  {integer} i => xCoordinate
 * @param  {integer} j => yCoordinate
 */
export const cellHealthCheck = (i, j) => {
  // Cells should not search out of the grid
  if (i < 0 || j < 0 || i > 9 || j > 9) return false;
  return true;
};

/**
 * @param  {array} position => Contains the coordinates of the tiles
 */
export const getCellPosition = position => {
  let _ = position.split(",");
  let xCoordinate = _[0];
  let yCoordinate = _[1];

  return [xCoordinate, yCoordinate];
};

/**
 * @param  {integer} i => xCoordinate
 * @param  {integer} j => yCoordinate
 * @param  {String} color => Color clicked
 * @param  {Array} arr => Array of matched tiles
 */
export const getMatches = (i, j, color, arr, originalGrid) => {
  if (arr.length === 0) {
    //   Tile which was selected
    matchCell(i, j, originalGrid, color, arr);
  }

  // check top of the tile
  matchCell(i, j + 1, originalGrid, color, arr);
  // check right of the tile
  matchCell(i + 1, j, originalGrid, color, arr);
  // check bottom of the tile
  matchCell(i, j - 1, originalGrid, color, arr);
  // check left of the tile
  matchCell(i - 1, j, originalGrid, color, arr);
};

/**
 * @param  {integer} i => xCoordinate
 * @param  {integer} j => yCoordinate
 * @param  {Array} originalGrid => Original board before changes
 * @param  {String} color => Color clicked
 * @param  {Array} arr => Array of matched tiles
 */
export const matchCell = (i, j, originalGrid, color, arr) => {
  let hash = {};
  let isVisited = false;

  // create a hash of the tiles which are matched
  // The key of the object has the position of the tiles
  // which are already scanned

  if (arr.length > 0) {
    for (let cell = 0; cell < arr.length; cell++) {
      if (arr[cell].hasOwnProperty([i, j])) {
        isVisited = true;
      }
    }
  }

  if (!isVisited && cellHealthCheck(i, j) && originalGrid[i][j] === color) {
    hash[[i, j]] = color;
    arr.push(hash);
    getMatches(i, j, color, arr, originalGrid);
  }
};
