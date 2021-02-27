let array = [];

for (index = 1; index <= 25; index += 1){
  array[index-1] = index;
}

for (indexArray = 0; indexArray < array.length; indexArray += 1){
  console.log(array[indexArray] / 2);
}
