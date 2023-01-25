var convert = function(s, numRows) {
    if (numRows === 1 || numRows > s.length) return s

    let count = 0;
    let direction = false;
    let result = new Array(numRows).fill('')

    for(let i = 0; i < s.length; i++){
        let current = s[i]
        result[count] += current;
        if(count === 0 || count >= numRows - 1) direction = !direction
        direction ? count++ : count--;
    }

    return result.join('');
};