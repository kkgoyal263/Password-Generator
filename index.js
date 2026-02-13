let allcharacters = ["A","B", "C", "D","E" , "F","G", "H","I","J","K","L","M","N","O","P","Q","R","S", "T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w", "x","y","z"]

const numberChar = ["0", "1", "2", "3", "4", "5", "6","7", "8", "9"]
const symbolChar = ["~" , "`" , "!", "@","#","$","%", "^", "&" , "*" , "(" , ")" , "_" , "-" , "+" , "=" 
    , "{" , "[" , "}" , "]" , "," , "|" , ":" , ";" , "<" , ">" ,".","?","/",'"','/']



function randomPassword(){
    let password = allcharacters[Math.floor(Math.random() * allcharacters.length)]
    return password
    
}

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

function generatePassword(){

        const includeNumbers = document.getElementById("numbers").checked
        const includeSymbols = document.getElementById("symbols").checked

        if(includeNumbers){
            allcharacters += numberChar
        }
        if(includeSymbols){
            allcharacters += symbolChar
        }
        password1El.textContent = ""
        password2El.textContent = ""

        for(let i = 0; i< 15; i++){
            password1El.textContent += randomPassword()
            password2El.textContent += randomPassword() 
        }
    }
