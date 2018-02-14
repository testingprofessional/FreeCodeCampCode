function bouncer(arr) {
    
    var arrFiltered = arr.filter(Boolean);

    console.log(arrFiltered);
    return arrFiltered;
  }
  
  bouncer([7, "ate", "", false, 9]);