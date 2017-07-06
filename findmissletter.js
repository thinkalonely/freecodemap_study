function fearNotLetter(str) {
  var mis = '';
  var len = str.length;
 
  if (str[len-1].charCodeAt() - str[0].charCodeAt() == len - 1) {
    return undefined;   
  }
  
  for (var i = 0; i < len; i++) {
      var bf = str.charCodeAt(i);
      var af = str.charCodeAt(i+1);
        while ( af - bf > 1) {
          mis += String.fromCharCode(bf + 1);
          bf++;
        }  
    
  }
  return mis;
}

fearNotLetter("acf");
