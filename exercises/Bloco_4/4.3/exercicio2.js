let n = 5;
let asteriskTriangle = '*';

if (n > 1){
  for (indexLine = 0; indexLine < n; indexLine += 1) {
    console.log(asteriskTriangle);
    asteriskTriangle += '*';
  }
}