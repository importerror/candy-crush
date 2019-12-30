import React, { Component } from 'react';

export default class GridBoard extends Component {
  render() {
    let { grid, handleClick } = this.props;
    let nullTileStyle = {
      backgroundColor: '#9ca3a8',
      transition: 'background-color ease-in 0.2s'
    };
    
    return (
      <>
        {grid.map((row, rowIndex) => (
          <div className="row">
            {row.map((cell, cellIndex) => (
              <>
                {cell ? (
                  <div
                    className="cell"
                    data-color={cell}
                    data-position={[rowIndex, cellIndex]}
                    style={{
                      background: `${cell}`,
                      transition: 'background-color ease-in 0.5s'
                    }}
                    onClick={e => handleClick(e)}
                  ></div>
                ) : (
                  <div
                    className="cell"
                    data-color={cell}
                    data-position={[rowIndex, cellIndex]}
                    style={nullTileStyle}
                  ></div>
                )}
              </>
            ))}
          </div>
        ))}
      </>
    );
  }
}
