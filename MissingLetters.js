function fearNotLetter(str) {

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var beginning = (str.charCodeAt(0) - 97);
    var missingLetter = "";

    console.log('beginning: ' + beginning);

    for(var i=beginning, j=0; j<str.length; i++, j++) {
      console.log(str[j]);
      console.log(alphabet[i]);
      if(str[j] != alphabet[i]) {
        missingLetter = alphabet[i];
        break;
      } else {
        missingLetter = undefined;
      }
    }
    console.log(missingLetter);
    return missingLetter;
  }
  
  fearNotLetter("yz");

  /*
  fearNotLetter("abce") should return "d". 
  fearNotLetter("abcdefghjklmno") should return "i". 
  fearNotLetter("bcd") should return undefined. 
  fearNotLetter("yz") should return undefined.
  */