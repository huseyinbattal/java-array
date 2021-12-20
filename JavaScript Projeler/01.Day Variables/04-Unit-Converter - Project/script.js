var kelvin = prompt("write you kelvin degrees");//14.bolum
var kelvin = 294;//1.BOLUM
//convert kelvin to celcius
let celcius = (kelvin-273);//2.BOLUM
console.log(celcius +"C");
//CONVERT TO CELCİUS FAHRENHEİT
var fahrenheit = Math.round(celcius*33.8);//5.BOLUM VE 7.BOLUM
console.log(fahrenheit);
console.log("the temperature is " +fahrenheit +"F");//9.BOLUM
//convert kelvin to fahrenheit
/* ℉ =(K - 273.15)* 1.8000+ 32.0 */
var kelvin = 0;//11.bolum
fahrenheit = (0-273.15)*1.80+32;
console.log(fahrenheit);
//convert celcius to newton 
var newton = Math.floor(celcius*(33/100));//12.bolum
console.log(`the temperature is ${newton} N`);