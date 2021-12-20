let johnScore=(89+120+103)/3;
let mikeScore=(116+94+123)/3;
let maryScore=(97+134+105)/3;

console.log(johnScore);
console.log(mikeScore);
console.log(maryScore);

if (johnScore>mikeScore){
    console.log(`John maci ${johnScore} puan ile kazandi `);
}

else if(mikeScore>johnScore){
console.log(`Mike maci ${mikeScore} puan ile kazandi`)
}
else{
    console.log(`Mac ${johnScore}-${mikeScore} berabere bitti. `)
}

//IKINCI BOLUM

if(johnScore>mikeScore && johnScore>maryScore ){

    console.log(`John maci ${johnScore} puan ile kazandi `);
}

else if(mikeScore>johnScore && mikeScore>maryScore){
    console.log(`Mike maci ${mikeScore} puan ile kazandi `);
}
else if(maryScore>johnScore && maryScore>mikeScore){

    console.log(`Mary maci ${maryScore} puan ile kazandi `);

}
else{
    console.log('maclar berabere bitti');
}
