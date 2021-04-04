let n = 7;
const mid = (n-1)/2;
let left = mid, right = mid;

if (n % 2 !== 0) {
  const asteriskLeakedPiramid = () => {
    for (let row = 0; row <= mid; row += 1) {
      let line = new String();
      for (let column = 0; column < n; column += 1) {
        (row === mid || column === left || column === right) ? line += '*' : line += ' ';
      }
      console.log(line);
      left -= 1;
      right += 1;
    }
  }
  asteriskLeakedPiramid();
}
