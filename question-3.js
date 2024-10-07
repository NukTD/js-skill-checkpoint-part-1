// Question #3
let userPassword = "";

function checkPasswordStrength(userPasswords){
    
    for(let i = 0; i < userPassword.length; i++){
        if(userPassword[i].length < 6 ){
            return "WeaK";
        }else if(userPassword[i].length >= 6 && userPassword[i].length <= 10){
            return "Medium";
        }else{
            return "Strong";
        }                    
    }
    return userPassword    
}

let result = checkPasswordStrength(userPassword);
console.log(result);

/*😵😵
  😵😵
  😵😵*/

