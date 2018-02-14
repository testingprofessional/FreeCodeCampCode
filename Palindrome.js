function palindrome(str) {
  
  var strClean = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, '');
  console.log(strClean);
  var strCleanReversed = strClean.split("").reverse().join("");
  console.log(strCleanReversed);
  
  if(strClean === strCleanReversed) {
  return true; } else {
    return false;
  }
}

palindrome("1 eye for of 1 eye.");