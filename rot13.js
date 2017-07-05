function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  var newstr = [];
  for (var i = 0; i < str.length; i++) {
    var ucode = str.charCodeAt(i);
    if (ucode > 64 && ucode <78) {
    newstr.push(String.fromCharCode(ucode + 13));
    }
    else if (ucode > 77 && ucode <= 90) {
      newstr.push(String.fromCharCode(ucode - 13));
    }
    else {
      newstr.push(String.fromCharCode(ucode));
    }
  }
  
  
  
  return newstr.join('');
}

rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码
