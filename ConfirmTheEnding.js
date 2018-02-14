function confirmEnding(str, target) {
    var targetLength = target.length;
    console.log(targetLength);
    var strEnd = str.slice(-(targetLength));
    console.log(strEnd);

    if(target === strEnd) {
        return true;
    }
  }
  
  confirmEnding("Bastian", "n");
  