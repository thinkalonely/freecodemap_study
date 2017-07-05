function convert(num) {
  
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
  var romans =["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"]; 
  var str = ''; 
  nums.forEach(function(item,index,array){ 
    while(item <= num){ 
      str += romans[index]; 
      num -= item; 
                      } 
  }); 
  return str.toUpperCase();


 
}

convert(3);
