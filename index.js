// INPUT ELEMENTS DECLARATION
let passInput = document.querySelector("#passInput");
let charInput = document.querySelector("#charInput");
let symbolInput = document.querySelector("#symbolInput");
let numericInput = document.querySelector("#numericInput");
   
// OUTPUT ELEMENTS DECLARATION
let passOutput = document.querySelector("#passOutput");
let charOutput = document.querySelector("#charOutput");
let symbolOutput = document.querySelector("#symbolOutput");
let numericOutput = document.querySelector("#numericOutput");

//INPUT BUTTONS DECLARATION
let passBtn = document.querySelector("#passBtn");
let charBtn = document.querySelector("#charBtn");
let symbolBtn = document.querySelector("#symbolBtn");
let numericBtn = document.querySelector("#numericBtn");

// INPUT MESSAGE DECLARATION
let passMsg = document.querySelector("#passMsg");
let charMsg = document.querySelector("#charMsg");
let symbolMsg = document.querySelector("#symbolMsg");
let numericMsg = document.querySelector("#numericMsg");

// REMAINING :  DISPLAY DECLARATION
let remainingDisplay = document.querySelector("#remainingDisplay");

// GENERATE PASSWORD BUTTON DECLARATION
let generatePassBtn = document.querySelector("#generatePass");

// RESET BUTTON DECLARATION
let resetBtn = document.querySelector("#resetBtn");

// CHAR , SYMBOL , NUMERICS ARRAYS
let characterArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let symbolArr = ['!','@','#','$','%','^','&','*','(',')','-','<','>','~'];
let numericArr = [0,1,2,3,4,5,6,7,8,9];

// PASSWORD 1 & 2 DECLARATION
let password1 = document.querySelector("#pass1");
let password2 = document.querySelector("#pass2");

// PASSWORD 1 & 2 VARIABLE DECLARATION
let pass1="";
let pass2="";

// PASSWORD , CHAR , SYMBOL , NUMERIC LENGTHS VARIABLE DECLARATION
let passLength = 0 ;
let charLength = 0 ;
let symbolLength = 0 ;
let numericLength = 0 ;


// REGISTERS CHANGES MADE IN INPUT BAR 
function change1()
{
   passOutput.textContent = passInput.value;
}

function change2()
{
   charOutput.textContent = charInput.value;
}

function change3()
{
   symbolOutput.textContent = symbolInput.value;
}

function change4()
{
   numericOutput.textContent = numericInput.value;
}

// PARSER TO INT FUNCTION
function parser(){
   passLength = parseInt(passLength);
   charLength = parseInt(charLength);
   symbolLength = parseInt(symbolLength);
   numericLength = parseInt(numericLength); 
}

// PASSWORD MESSAGE
passMsg.textContent = "(max : 15)";

// PASSWORD LENGTH CONFIRM BUTTON FUNCTION
passBtn.addEventListener("click",function(){
   passLength = passInput.value;
   charMsg.textContent = `(remaining :${passLength}/15)`;
   document.getElementById("charInput").max = passLength;
   parser();
})

// CHAR LENGTH CONFIRM BUTTON FUNCTION 
charBtn.addEventListener("click",function(){
   charLength = charInput.value;
   symbolMsg.textContent = "(remaining : " + (passLength - charLength ) + "/15)";
   document.getElementById("symbolInput").max =(passLength - charLength);
   parser();
})

// SYMBOL LENGTH CONFIRM BUTTON FUNCTION 
symbolBtn.addEventListener("click",function(){
   symbolLength = symbolInput.value;
   numericMsg.textContent = "(remaining : " + (passLength - charLength - symbolLength) + "/15)";
   document.getElementById("numericInput").max =(passLength - charLength - symbolLength);
   parser();
})

// NUMERICS LENGTH CONFIRM BUTTON FUNCTION
numericBtn.addEventListener("click",function(){
   numericLength = numericInput.value;
   remainingDisplay.textContent = "Remaining : " + (passLength - charLength - symbolLength - numericLength);
   parser();
})

// REMAINING : DEFAULT MESSAGE 
remainingDisplay.textContent = "Remaining : ";


// GENERATE PASSWORD BUTTON FUNCTION (MAIN FUNCTION OF PROGRAM)
generatePassBtn.addEventListener("click",function(){

   //CHARACTER OUTPUT FUNCTION
   function charFunc(){
      let char = 0 ;
      let charStr = "";
      for(let i = 0 ; i < charLength ; i++){
         char = Math.floor(Math.random() * characterArr.length);
         charStr += characterArr[char];
      }
      return charStr;
   }

   // SYMBOL OUTPUT FUNCTION 
   function symFunc(){
      let sym = 0 ;
      let symStr = "";
      for(let i = 0 ; i < symbolLength ; i++){
         sym = Math.floor(Math.random() * symbolArr.length);
         symStr += symbolArr[sym];
      }
      return symStr;
   }

   // NUMERICS OUTPUT FUNCTION
   function numFunc(){
      let num = 0 ;
      let numStr = "";
      for(let i = 0 ; i < numericLength ; i++){
         num = Math.floor(Math.random() * numericArr.length);
         numStr += numericArr[num];
      }
      return numStr;
   }

   // GENERATE PASSWORD FUNCTION
   function generatePassword(){
      return charFunc() + symFunc() + numFunc();
   }

   // PASSWORD 1 & 2 VARIABLE FUNCTION
   pass1 = generatePassword();
   pass2 = generatePassword();

   // PASSWORD 1 & 2 OUTPUT FUNCTION
   password1.textContent = pass1;
   password2.textContent = pass2;

})
   
// RESET BUTTON FUNCTION
resetBtn.addEventListener("click",function()
{
   passLength = 0 ;
   charLength = 0 ;
   symbolLength = 0 ;
   numericLength = 0 ;
   passOutput.textContent = 0;
   charOutput.textContent = 0;
   symbolOutput.textContent = 0;
   numericOutput.textContent = 0;
   remainingDisplay.textContent = "Remaining : ";
   passMsg.textContent = "(max: 15)";
   charMsg.textContent = "";
   symbolMsg.textContent = "";
   numericMsg.textContent = "";
   document.getElementById("passInput").value = 0 ;
   document.getElementById("charInput").value = 0 ;
   document.getElementById("symbolInput").value = 0 ;
   document.getElementById("numericInput").value = 0 ;
   password1.textContent="";
   password2.textContent="";
});