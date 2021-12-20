
let age= 19;
let time= false;

if (age>18 && time === true) {
    console.log(`Yarışınız 9.30'da Numaranız ${Math.floor(Math.random()*1000)+1000}`)

} else if(age>18 && time === false) {
    console.log(`Yarışınız 11.00'da Numaranız ${Math.floor(Math.random()*1000)}`)

} else if (age === 18) {
    console.log(`Yönetici ile görüşün`)

} else {
    console.log(`Yarışınız 12.30'da Numaranız ${Math.floor(Math.random()*1000)}`)

}

/*


var age =prompt("write your age")
if (age<18) {
    console.log(`your race will start at 12:30 and your race rumber is ${Math.floor(Math.random()*1000)}`)
}else  {
    raceTime =prompt("early or late selecet one of them").toLowerCase();
    if(age>18 && raceTime ==="early") {
        console.log(`your race will start at 9:30 and your race number is ${Math.floor((Math.random() +1)*1000)}`);

    }else if (age>18 && raceTime=="late") {
        console.log(`your race will start at 11 :00 and your race number is  ${Math.floor(Math.random()*1000)}`)

    } else {
        console.log("ask for organizator")
    }

    
    
}
*/
