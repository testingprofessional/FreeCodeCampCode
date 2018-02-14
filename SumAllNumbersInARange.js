function sumAll(arr) {
    
    var sumAllSorted = arr.sort(function(a, b){return a-b;});
    var begin = sumAllSorted[0];
    var end = sumAllSorted[1];
    var result = 0;
    
    for(var i=begin; i<=end; i++) {
        console.log('begin: ' + begin);
        console.log('end: ' + end);
      result = result + i;
      console.log('result: ' + result);
    }
    console.log(result);
    return result;
  }
  
  sumAll([1, 4]);