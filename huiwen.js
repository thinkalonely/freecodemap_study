function palindrome(str) {
  // 请把你的代码写在这里
  
  var str1 = str.replace(/[\W_]/g, ''); // [/W_]匹配所有非字母数字和下划线
  var str2 = str1.toLowerCase();        // 装换为小写
  var arr = str2.split('').reverse();
  var str3 = arr.join('');
  //return str3;
  if (str3 == str2 ) {
    
  
  return true;
  }
  else {
    
    return false;
  }
}



palindrome("never odd or even ");
