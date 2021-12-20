let age=18;
let user="mike";

if (age<=18){
    console.log(`${user} , ${age} yasindadir ve meyve suyu icebilir`);
}
else{
    console.log(`${user} , ${age} yasindadir ve icki icebilir`);

}

//  Ternary operator

age<=18 ? console.log(`${user}, ${age} yasindadir ve meyve suyu icebilir`) : console.log(`${user}, ${age} yasindadir ve icki icebilir`);

let johnAge=12;


switch (true) {
    case johnAge<13:
        console.log("John is a boy")
        break;
        case johnAge>=13 && johnAge<20:
            console.log("John is a teenager")
            break;
            case johnAge>=20 && johnAge<30:
            console.log("John is a young man")
            break;
    default:
        console.log("John is a man")
        break;
}