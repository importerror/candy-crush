import React from "react";

export default function GridBoard(props) {
  let { grid, handleClick } = props;
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
                  style={{ background: `${cell}` }}
                  onClick={e => handleClick(e)}
                ></div>
              ) : (
                <div
                  className="cell"
                  data-color={cell}
                  data-position={[rowIndex, cellIndex]}
                  style={{
                    background: "#9ca3a8"
                  }}
                ></div>
              )}
            </>
          ))}
        </div>
      ))}
    </>
  );
}
