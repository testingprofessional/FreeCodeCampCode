function slasher(arr, howMany) {
    var arrSliced = arr.slice(howMany);
    console.log(arrSliced);
    return arrSliced;
  }
  
  slasher([1, 2, 3], 2);