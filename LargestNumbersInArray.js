function largestOfFour(arr) {
    var finalArr = [];
    for(var i=0; i < arr.length; i++) {
        var cube = arr[i];
        var temp = 0;
        for(var j = 0; j < cube.length; j++) {
            console.log('temp:' + temp);
            console.log('arrIJ:' + arr[i][j]);
            if(arr[i][j] > temp) {
                temp = arr[i][j];
            }    
        } 
        finalArr.push(temp);
    }
    console.log(finalArr);
    return finalArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);