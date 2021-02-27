let n = 5;
let asteriskTriangleInverted;

if (n > 1) {
  for (indexLine = 0; indexLine < n; indexLine += 1) {
    asteriskTriangleInverted = '';
    for (indexColumn = 0; indexColumn < n; indexColumn += 1) {
      if (indexColumn + indexLine < n - 1 ) {
        asteriskTriangleInverted += ' ';
      } else {
        asteriskTriangleInverted += '*';
      }
    }
    console.log(asteriskTriangleInverted);
  }
}

// console.log(asteriskTriangleInverted);