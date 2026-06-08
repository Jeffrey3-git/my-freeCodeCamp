let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generatePassword(lenOfPassword){
  let result = "";
  for (let i=0; i<lenOfPassword; i++){
    let characterIndex = Math.floor(Math.random()* characters.length)
    result += characters[characterIndex]
  }
  return result;
}

let password = generatePassword(7);
console.log(`Generated password: ${password}`)
