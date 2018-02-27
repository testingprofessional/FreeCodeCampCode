function uniteUnique(arr) {

  var allArr = [];

  for(var i=0; i<arguments.length; i++) {
    var arrTemp = arguments[i];
    for(var j=0; j<arrTemp.length; j++) {
      var indexValue = arrTemp[j];

      if(allArr.indexOf(indexValue) < 0) {
        allArr.push(indexValue);
      }
    }
  }
  console.log(allArr);
  return allArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]. 
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]. 
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]. 
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]. 
*/