import validator from './validator.js';

let btnValid = document.getElementById("validcard");
btnValid.addEventListener("click", ()=>{  //addEventListener está haciendo la función del onclick y está llamado al objeto de Validator
   let numeros = document.getElementById("cardNumbers").value;
   let result = document.getElementById("resultado");
   validator.maskify(numeros) && validator.isValid(numeros);
   let hiddenNums = validator.maskify(numeros);
   let resultIsValid = validator.isValid(numeros);
   if (resultIsValid){
      result.innerHTML = "Tu tarjeta </br>" + hiddenNums + "</br> es válida.";
   } else {
      result.innerHTML = "Tu tarjeta </br>" + hiddenNums + "</br> no es válida." }
  }); 

let showResult = document.getElementById("validcard"); //el botón de Validar también activa la otra sección
showResult.addEventListener("click", ()=>{ //callback es una función que pasa como parámetro
   let datos = document.getElementById("inicio");
   datos.style.display = "none";
   let tarjeta = document.getElementById("validation");
   tarjeta.style.display = "block";
});
   
   
let showStart = document.getElementById("tryAgain");
showStart.addEventListener("click", ()=>{
   let tarjeta = document.getElementById("validation");
   tarjeta.style.display="none";
   let datos = document.getElementById("inicio");
   datos.style.display="block";
   datos.style.display="flex";
   let numeros = document.getElementById("cardNumbers");
   numeros.value = ""; //cambiaría los números por un espacio (los borraría)
});

//console.log(validator);
