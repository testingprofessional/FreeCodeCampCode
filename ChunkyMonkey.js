function chunkArrayInGroups(arr, size) {
    var tempArr = [];
    var slice = 0;

    for(var i=0; i<arr.length; i += size) {
        console.log('arr: ' + arr[i]);
        tempArr.push(arr.slice(slice, (slice + size)));
        slice = slice + size;
    }
    console.log(tempArr);
    return tempArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);