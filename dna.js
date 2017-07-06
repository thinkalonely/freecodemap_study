function pair(str) {
  var newarr = [];
  str = str.split('');
  for (var i = 0; i < str.length; i++) {
    
  
    newarr.push([str[i], gets(str[i])]);
  }
  function gets(val) {
    switch (val) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      default :
        return 0;
    }
  }
  return newarr;
}

pair("GCG");
