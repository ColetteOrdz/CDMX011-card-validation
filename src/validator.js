const validator = {
    "maskify" : function (numeros) {
        
        let numDiv = numeros.slice(-4) // seleccionar los números menos los últimos 4
        const infoArr = numeros.split(",") // dividir el array
        for(let element3 = 0; element3 < infoArr.length; element3++){
            infoArr[element3] =infoArr[element3].replace(/./g, '#') //cambiar cada número por #
        }
        let arrToStr = infoArr.join(''); // Volver a string el array
        let hideNums = arrToStr.slice(0, -4) + numDiv;
        //console.log(hideNums);
        return hideNums; 
            
    },


    "isValid" : function (numeros) {

        let cardInfo = numeros.toString().split(""); //no puse nada porque los números están separados por espacios entre cada uno
        //console.log(cardInfo);
        let revertidos = cardInfo.reverse("cardInfo"); //revertí el orden del string
        //console.log(revertidos); 
        
        for (var element = 0 ; element < cardInfo.length; element++) { //ubicar los dígitos en las posciones par
           if (element%2!==0) {
              var posicionesPar = (revertidos[element]*2); //duplicar los dígitos en las posicones par
              revertidos[element] = posicionesPar; 
           } else {
               continue;
           }}
               
        for (var element2 = 0 ; element2 < cardInfo.length; element2++) {
           if (element2%2!==0 && revertidos[element2]>9) { //cada elemento en posición par y mayor a 9
              var reducirNums = (revertidos[element2]-9); //se le reste 9 para que el número duplicado sea menor a 10
              revertidos[element2] = reducirNums;
           } else {
               continue; 
           }}
        
        let arrayNum = revertidos.map(Number); //volver cada elemento del array a números

        let suma = arrayNum.reduce((a,b) => a + b); //suma de todos los dígitos 
         //console.log(suma);
        
        if (suma%10===0) {
             //console.log(true);
            return true ;
        }  else {
            //console.log(false);
            return false ;
        }
             
     }
    
    
}

export default validator;
