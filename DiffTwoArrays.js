function diffArray(arr1, arr2) {
  var newArr = [];
  
  function onlyInFirst(firstArr, secondArr) {
    for (var i=0;i<firstArr.length;i++) {
      if (secondArr.indexOf(firstArr[i]) === -1) {
        newArr.push(firstArr[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  console.log(newArr);
  return newArr;
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);