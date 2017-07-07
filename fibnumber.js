function sumFibs(num) {
  var sum = 2;
  var a1 =1;
  var a2 = 1;
  for(var i=0;a2<=num;i++){
    var a =a1;
    a1=a2;
    a2+=a;
    if(a2%2 === 1&&a2<=num){
sum+=a2;
    }
  }
  return sum;
}

sumFibs(4);
