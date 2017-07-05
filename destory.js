function destroyer(arr) {
  // 请把你的代码写在这里
  var newarr = [];
  for (var i = 0; i < arguments.length; i++) {
    newarr.push(arguments[i]);
  }
  function filtered(ele){
        return newarr.indexOf(ele) < 0;
      }
  var newarr2=arr.filter(filtered);
  
  
  return newarr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
