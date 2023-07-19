






function topla(){
    let say1 = +document.querySelector(".say1").value;
    let say2 = +document.querySelector(".say2").value;
    let islem = say1 + say2;
        if (islem !== islem ){
            let sonuc= document.querySelector("h3").innerHTML ="hatalı bir işlem girişi yaptınız...";
        }else{
           let sonuc= document.querySelector("h3").innerHTML ="sonuc: "+islem;
        }
    
}
function cikar(){
    let say1 = +document.querySelector(".say1").value;
    let say2 = +document.querySelector(".say2").value;
    let islem = say1 - say2;

    if (islem !== islem ){
        let sonuc= document.querySelector("h3").innerHTML ="hatalı bir işlem girişi yaptınız...";
    }else{
       let sonuc= document.querySelector("h3").innerHTML ="sonuc: "+islem;
    }
}
function carp(){
    let say1 = +document.querySelector(".say1").value;
    let say2 = +document.querySelector(".say2").value;
    let islem = say1 * say2;
    if (islem !== islem ){
        let sonuc= document.querySelector("h3").innerHTML ="hatalı bir işlem girişi yaptınız...";
    }else{
       let sonuc= document.querySelector("h3").innerHTML ="sonuc: "+islem;
    }
}
function bol(){
    let say1 = +document.querySelector(".say1").value;
    let say2 = +document.querySelector(".say2").value;
    let islem = say1 / say2;
    if (islem !== islem ){
        let sonuc= document.querySelector("h3").innerHTML ="hatalı bir işlem girişi yaptınız...";
    }else{
       let sonuc= document.querySelector("h3").innerHTML ="sonuc: "+islem;
    }
}
function temizle(){
    let say1 = +document.querySelector(".say1").value;
    let say2 = +document.querySelector(".say2").value;
    let islem = say1 + say2;
    let sonuc= document.querySelector("h3").innerHTML ="İşlem yapılmamaktadır....";

 }

