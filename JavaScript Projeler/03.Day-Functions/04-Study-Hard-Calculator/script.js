function calisilanSaat(day) {
    switch (day) {
        case "pazartesi":
            return 8;
            break;

        case "salı":
            return 10;
            break;

        case "çarşamba":
            return 12;
            break;

        case "perşembe":
            return 12;
            break;

        case "cuma":
            return 12;
            break;

        case "cumartesi":
            return 12;
            break;

        case "pazar":
            return 0;
            break;

        default:
            return "Hatalı"
            break;
    }
}



function toplamHaftalikcalisilanSaat() {

    return calisilanSaat("pazartesi") + calisilanSaat("salı") + calisilanSaat("çarşamba") + calisilanSaat("perşembe") + calisilanSaat("cuma") + calisilanSaat("cumartesi") + calisilanSaat("pazar")
}

//Haftada toplam çalışılan saat
console.log(`Haftada Toplam ${toplamHaftalikcalisilanSaat()} saat çalıştınız.`);

function idealCalismaSaati() {
    let idealHaftalıkSaat = 8 * 7;
    return idealHaftalıkSaat;
}
//Haftada toplam çalışılması gereken saat
console.log(`Haftada Toplam ${idealCalismaSaati()} saat çalışmalısınız.`);

function calismaDurumu() {
    if (toplamHaftalikcalisilanSaat === idealCalismaSaati) {
        return `Toplam ${toplamHaftalikcalisilanSaat()} saat çalışarak tam mesai saatini doldurdunuz.`
    }


else if(toplamHaftalikcalisilanSaat() > idealCalismaSaati()) {
    return `Toplam ${toplamHaftalikcalisilanSaat()} saat çalıştınız. Bu hafta ${toplamHaftalikcalisilanSaat() - idealCalismaSaati()} saat fazla çalıştınız. Dinlenmelisiniz.`

}
else {

            return `Toplam ${toplamHaftalikcalisilanSaat()} saat çalıştınız ve Bu hafta olması gerekenden ${idealCalismaSaati ()-toplamHaftalikcalisilanSaat()}  saat az çalıştınız.`
        }    

}

console.log(calismaDurumu());