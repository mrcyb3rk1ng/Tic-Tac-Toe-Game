let values = "";
let compValues = "";

const count = (value, self) => {
   values += value;
   
   self.style.backgroundColor = "green";
   self.textContent = "O";
   self.setAttribute("disabled", true);
   
   setTimeout(() => {
      let randomBtn = 0;
      let loopContinue = true;
      
      while (loopContinue) {
         let randomNum = Math.floor(Math.random() * 8) + 1;
         if (values.includes(randomNum) || compValues.includes(randomNum)) {
            continue
         } else {
           randomBtn = randomNum;
           loopContinue = false;
         }
      }
      
      let compSelected = document.getElementById(`btn${randomBtn}`);
      
      compValues += compSelected.value;
      compSelected.style.backgroundColor = "red";
      compSelected.textContent = "X";
      compSelected.setAttribute("disabled", true);
      
      if ((compValues.includes("1") && compValues.includes("2") && compValues.includes("3")) || (compValues.includes("4") && compValues.includes("5") && compValues.includes("6")) || (compValues.includes("7") && compValues.includes("8") && compValues.includes("9"))) {
         alert("you have lost!");
         values = "";
         compValues = "";
      } else if ((compValues.includes("1") && compValues.includes("4") && compValues.includes("7")) || (compValues.includes("2") && compValues.includes("5") && compValues.includes("8")) || (compValues.includes("3") && compValues.includes("6") && compValues.includes("9"))) {
         alert("you have lost!");
         values = "";
         compValues = "";
      } else if ((compValues.includes("1") && compValues.includes("5") && compValues.includes("9")) || (compValues.includes("3") && compValues.includes("5") && compValues.includes("7"))) {
         alert("you have lost!");
         values = "";
         compValues = "";
      }
      
   },500);
   
   if ((values.includes("1") && values.includes("2") && values.includes("3")) || (values.includes("4") && values.includes("5") && values.includes("6")) || (values.includes("7") && values.includes("8") && values.includes("9"))){
      alert("you have won!");
      values = "";
      compValues = "";
   } else if ((values.includes("1") && values.includes("4") && values.includes("7")) || (values.includes("2") && values.includes("5") && values.includes("8")) || (values.includes("3") && values.includes("6") && values.includes("9"))) {
      alert("you have won!");
      values = "";
      compValues = "";
   } else if ((values.includes("1") && values.includes("5") && values.includes("9")) || (values.includes("3") && values.includes("5") && values.includes("7"))) {
      alert("you have won!");
      values = "";
      compValues = "";
   } 
   
   if (values.length + compValues.length == 9) {
      alert("match draw!");
      values = "";
      compValues = ""; 
   }
   
};