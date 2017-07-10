function sumPrimes(num) {
  var sum = 2;
  
  for (var j = 3; j <= num; j++) {
    sum +=isprim(j);
    
  }
  function isprim(val) {
    var flag = 0;
    for (var i = 2; i < val/2 +1 ; i++) {
    if (val % i === 0) {
       flag = 0;
      break;
    }
    flag = 1;
    
  }
    if (flag == 1 ) {
      
      return val;
    }
    return 0;
  }
  
  return sum;
}

sumPrimes(20);
