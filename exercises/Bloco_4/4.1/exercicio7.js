let percent = -69;

if (percent >= 90 && percent <= 100) {
  console.log('A');
} else if (percent < 90 && percent >= 80) {
  console.log('B');
} else if (percent < 80 && percent >= 70) {
  console.log('C');
} else if (percent < 70 && percent >= 60) {
  console.log('D');
} else if (percent < 60 && percent >= 50) {
  console.log('E');
} else if (percent < 50 && percent >= 0) {
  console.log('F');
} else if (percent > 100 || percent < 0){
  console.log('Erro! Invalid value.');
}