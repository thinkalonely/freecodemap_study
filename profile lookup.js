//初始化变量
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUp(firstName, prop){
// 请把你的代码写在这条注释以下

  for (var i = 0; i < contacts.length; i++){
    if (firstName == contacts[i].firstName ) {
      if ( contacts[i].hasOwnProperty( prop ) ) {
        return contacts[i][prop];
      } 
      else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  
  
// 请把你的代码写在这条注释以上
}

// 你可以修改这一行来测试你的代码
lookUp("Akira", "likes");
