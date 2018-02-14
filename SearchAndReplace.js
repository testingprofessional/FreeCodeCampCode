function myReplace(str, before, after) {

    function isUppercase(wordBefore, wordAfter) {
        if(wordBefore[0].toUpperCase() == wordBefore[0]) {
            afterUpperCase = wordAfter.charAt(0).toUpperCase() + wordAfter.slice(1);
            console.log(afterUpperCase);
        } else {
            afterUpperCase = wordAfter;
        }
    }

    var beforeUpperCase = "";
    var afterUpperCase = "";
    isUppercase(before, after);
    var res = str.replace(before, afterUpperCase);

    console.log(afterUpperCase);
    console.log(res);
    return res;
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

  //find word
  //splice and store index
  //remove word
  //insert word with index