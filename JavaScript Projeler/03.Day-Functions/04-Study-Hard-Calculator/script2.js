//Öncelikle değişkenlerimizi tanımlıyoruz
let morning="morning";
let evening="evening";
let commuting="commuting";
let work="work";
let weekends="weekends";
let actualStudyPoints;

// prompt ile kişinin hangi zaman diliminde kaç saat çalıştığını alıp değişkenlerimize atıyoruz.
let morningCount=prompt("Bu hafta, sabah kaç saat ders çalıştınız?")
let eveningCount=prompt("Bu hafta, akşam kaç saat  ders çalıştınız?")
let commutingCount=prompt("Bu hafta, işe giderken kaç saat ders çalıştınız?")
let workCount=prompt("Bu hafta, işte kaç saat ders çalıştınız?")
let weekendsCount=prompt("Bu haftasonu kaç ssat ders çalıştınız?")

// puanHesapla fonksiyonumuz kişinin bir hafta içerisinde kaç kez "sabah" kaç kez "akşam" kaç kez "işe giderken" gibi değerlerini promt yardımı ile alıp karşılığındaki katsayısı ile çarpıyor.
function puanHesapla(zaman) {
    if (zaman == morning) {
        return morningCount * 2.5;
    } else if (zaman == evening) {
        return eveningCount * 1;
    } else if (zaman == commuting) {
        return commutingCount * 2;
    } else if (zaman == work) {
        return workCount * 2;
    } else if (zaman == weekends) {
        return weekendsCount * 3;
    }
    else {
        alert("Hatalı giriş yaptınız.")
    }

}
//Fonksiyonumuzun doğru çalışıp çalışmadığını consol.log yardımı ile test ediyoruz.
console.log(puanHesapla(morning));
console.log(puanHesapla(evening));
console.log(puanHesapla(commuting));
console.log(puanHesapla(work));
console.log(puanHesapla(weekends));

//Daha sonra fonksiyonumuza değerleri girip actualStudyPoints değişkenimize atıyoruz. Örneğin kişi 5 saat sabah ders çalıştıysa ve 2 saat de akşam ders çalıştıysa bu değerlerin karşılığını hesaplayıp actualStudyPoints değişkenimize atadık.
actualStudyPoints = puanHesapla(morning) + puanHesapla(evening) + puanHesapla(commuting) + puanHesapla(work) + puanHesapla(weekends);

// Fonksiyonumuzun hesaplamış olduğu puanı consol ile yazdırıyoruz. Math.floor kullanarak puanımızın küsüratını siliyoruz.
console.log(`Puanınız: ${Math.floor (actualStudyPoints)}`);

//Puanımız eğer 25 ten küçükse consola "Verimli ders çalışma puanınız düşük" diye yazdırıyoruz. 25 ve 35 aralığında ise "Verimli ders çalışma puanınız yeterli" diye yazdırıyoruz. Sırasıyla da diğer else if içindeki koşullar uygunsa onları yazdırıyoruz.

if (actualStudyPoints < 25) {

    console.log("Verimli ders çalışma puanınız düşük")
} else if (actualStudyPoints >= 25 && actualStudyPoints < 35) {
    console.log("Verimli ders çalışma puanınız yeterli")
} else if (actualStudyPoints >= 35 && actualStudyPoints < 45) {
    console.log("Verimli ders çalışma puanınız iyi")
} else if (actualStudyPoints >= 45) {
    console.log("Verimli ders çalışma puanınız harika")
} else {
    console.log("Hatalı giriş yaptınız.");

}

