let toplamPara=prompt("Ne kadar paran var?");
let icecekUcreti=prompt("İçecek ücretini giriniz.");

function calcBottles(toplamPara,icecekUcreti){
    return  `Merhaba efendim ${toplamPara}₺ ile   ${Math.floor((toplamPara/icecekUcreti))} şişe içecek aldınız. Kalan paranız ${toplamPara%icecekUcreti} ₺.dir`;
}


alert(calcBottles(toplamPara,icecekUcreti));

console.log("Evden çık.");
console.log("Sola dön.");
console.log("Market git");
console.log("3 şişe içecek al");
console.log("Ücreti öde");
console.log("Marketten çık.");
console.log("Eve geri dön.");
console.log(`Merhaba efendim kalan paranız ${toplamPara%icecekUcreti}₺ dir`);