 let massMark=100;
 let heightMark=1.90;

 let massJohn=115;
 let heightJohn=1.80;

 let BMIMark=massMark/(heightMark*heightMark);
 let BMIJohn=massJohn/(heightJohn*heightJohn);

 console.log(BMIMark,BMIJohn);

 console.log(Math.floor(BMIJohn));
 console.log(Math.floor(BMIMark));

 console.log(Math.round(BMIJohn));
 console.log(Math.round(BMIMark));

 console.log(Math.round(BMIJohn));
 console.log(Math.round(BMIMark));

 console.log(BMIJohn.toFixed(3));
 console.log(BMIMark.toFixed(1));

 let markHeigherBMI=BMIMark>BMIJohn;
 console.log("Marks bmi buyuktur John bmi"+markHeigherBMI);

 if (BMIMark>BMIJohn)
 {
     console.log("Mark is heigher than John");
    
    }

     else {
         console.log("Mark is lower than John")
     }

 