const transpose = function(matrix) {

  let resultsArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    resultsArr.push([]);
    for (let j = 0; j < matrix.length; j++) {
      resultsArr[i].push(matrix[j][i]);
    }
  }
  return resultsArr;
};

const wordSearch = (letters, word) => {
  const forward = letters.map(ls => ls.join(''));
  for (const l of forward) {
    if (l.includes(word)) return true;
  }

  const lettersTransposed = transpose(letters);
  const down = lettersTransposed.map(ls => ls.join(''));
  for (const l of down) {
    if (l.includes(word)) return true;
  }

  const backward = letters.map(ls => ls.reverse().join(''));
  for (const l of backward) {
    if (l.includes(word)) return true;
  }

  const up = lettersTransposed.map(ls => ls.reverse().join(''));
  for (const l of up) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;