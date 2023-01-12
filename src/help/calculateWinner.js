const calculateWinner = (squares, row, column) => {
  let count = 0;
  let _arr = [];
  for (let i = 0; i < row; i++) {
    let _row = [];
    for (let j = 0; j < column; j++) {
      _row.push(squares[count]);
      count++;
    }
    _arr.push(_row);
  }
  console.log(_arr);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (
        _arr[i][j] !== null &&
        i !== 0 &&
        j !== 0 &&
        i !== row - 1 &&
        j !== column - 1 &&
        ((_arr[i][j] === _arr[i - 1][j] && _arr[i][j] === _arr[i + 1][j]) ||
          (_arr[i][j] === _arr[i][j - 1] && _arr[i][j] === _arr[i][j + 1]) ||
          (_arr[i][j] === _arr[i - 1][j - 1] &&
            _arr[i][j] === _arr[i + 1][j + 1]) ||
          (_arr[i][j] === _arr[i - 1][j + 1] &&
            _arr[i][j] === _arr[i + 1][j - 1]))
      ) {
        return _arr[i][j];
      }
      if (
        (_arr[i][j] !== null && i === 0) ||
        (_arr[i][j] !== null && i === row - 1)
      ) {
        if (
          j === 0 &&
          _arr[i][j] === _arr[i][j + 1] &&
          _arr[i][j] === _arr[i][j + 2]
        ) {
          return _arr[i][j];
        }
        if (
          j === column - 1 &&
          _arr[i][j] === _arr[i][j - 1] &&
          _arr[i][j] === _arr[i][j - 2]
        ) {
          return _arr[i][j];
        }
      }

      if (
        (_arr[i][j] !== null && j === 0) ||
        (_arr[i][j] !== null && j === column - 1)
      ) {
        if (
          i === 0 &&
          _arr[i][j] === _arr[i + 1][j] &&
          _arr[i][j] === _arr[i + 2][j]
        ) {
          return _arr[i][j];
        }
        if (
          i === row - 1 &&
          _arr[i][j] === _arr[i - 1][j] &&
          _arr[i][j] === _arr[i - 2][j]
        ) {
          return _arr[i][j];
        }
      }
    }
  }

  return null;
};
export default calculateWinner;
