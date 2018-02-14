function translatePigLatin(str) {

    var pigLatin = "";
    var vowels = ["a" , "e" , "i" , "o" , "u"];

    for(var i=0; i<vowels.length; i++) {
        if(str[0] === vowels[i]) {
            pigLatin = str + "way";
        } else {
            var firstLetter = str.substr(0,1);
            pigLatin = str.substr(1,str.length) + firstLetter + "ay";
        }
    }
    console.log(pigLatin);
    return pigLatin;
  }
  
  translatePigLatin("consonant");

  
//translatePigLatin("california") should return "aliforniacay". 
//translatePigLatin("paragraphs") should return "aragraphspay". 
//translatePigLatin("algorithm") should return "algorithmway". 
//translatePigLatin("eight") should return "eightway".