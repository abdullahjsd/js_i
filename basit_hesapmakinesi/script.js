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


let s1 =document.querySelector("#s1").innerHTML
let s2 =document.querySelector("#s2").innerHTML
let s3 =document.querySelector("#s3").innerHTML
let s4 =document.querySelector("#s4").innerHTML
let s5 =document.querySelector("#s5").innerHTML
let s6 =document.querySelector("#s6").innerHTML

let s8 =document.querySelector("#s8").innerHTML
let s9 =document.querySelector("#s9").innerHTML
let nokta=document.querySelector("#nokta").innerHTML
let esittir=document.querySelector("#esittir").innerHTML


function s7(){
    let s7 =document.querySelector("#s7").innerHTML
    let yazdir = document.querySelector(".say1").innerHTML.value=s7
    console.log(yazdir);
}





function s7(){
    let s7 =document.querySelector("#s7").innerHTML
    let denme="yajşalfkjsadkl"
    let yazdir = document.querySelector(".say1").innerHTML=denme

}



