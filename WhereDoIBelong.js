function getIndexToIns(arr, num) {

    arraySorted = arr.sort(function(a, b){return a-b});
    var counter = 0;

    for(var i=0; i<arraySorted.length; i++) {
        if(num > arraySorted[i]) {
            counter++;
        } else {
            break;
        }
    }
    console.log(arraySorted);
    console.log(counter);
        return counter;
  }
  
  getIndexToIns([5, 3, 20, 3], 5)