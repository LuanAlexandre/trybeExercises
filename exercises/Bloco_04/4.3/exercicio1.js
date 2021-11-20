let n = 5;
let asteriskSquare;

if (n > 1) {
  for (indexLine = 0; indexLine < n; indexLine += 1) {
    asteriskSquare = '*';
    for (indexColumn = 0; indexColumn < n - 1; indexColumn += 1) {
      asteriskSquare += '*';
    }
    console.log(asteriskSquare);
  }
}
