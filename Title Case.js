function titleCase(str) {
  // 请把你的代码写在这里
  var arr;
  arr = str.toLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    var char = arr[i].charAt(0);
    arr[i] = arr[i].replace(char, function(char) {
      return char.toUpperCase();
    });
    
  }
  return arr.join(' ');
}

titleCase("I'm a little tea pot");
