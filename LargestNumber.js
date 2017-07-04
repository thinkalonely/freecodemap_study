function largestOfFour(arr) {
  // 请把你的代码写在这里
  
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    var num = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > num) {
        
        num = arr[i][j];
        
       
        
      }
    }
    newarr.push(num);
    
  }
  
  
  
  return newarr;
}

largestOfFour([ [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
