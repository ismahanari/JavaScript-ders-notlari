// Karşılaştırma Operatörleri Ve Mantıksal Operatörler

let price1 = "0"
let price2 = 100
let user = "hakan"

// == eşitse
console.log("== :", price1 == 1) //false
console.log("== :", price2 == 100) // true

// === hem değeri hem de türü eşitse

console.log("=== :", price1 ===  "0") //true
console.log("=== :", price2 === "100") //false

// != eşit değilse

console.log("!= :", user != "guest") //true

// < küçükse

console.log("< :", price2 < 200)  //true

// <= küçük ve eşitse

console.log("<= :", price2 <= 100) //true
console.log("<= :", price2 <= 54)  //false

// > büyükse

console.log("> :", price2 > 56) // true

// >= büyük ve eşitse

console.log(">= :", price2 >= 100) //true
console.log(">= :", price2 >= 20012) // false

// && ve
price1 = 0
console.log("&& :", price1 > 0 && user != "guest") // false

// || veya (herhangi bir şart sağlanıyorsa true verir)
console.log("|| :", price1 > 0 || user != "guest")  //true/

// ! değil (tersi)

console.log("! :", price1 > -1 && !user == "hakan") //false 

/* let username1 = prompt("Kullanıcı adı : ")
if (username1.length > 0){
    console.log(`Kullanıcı adı ${username1}` )
}
else{
    console.log("kullanıcı bilgisi yok !")} */


// Büyük olan sayıyı bulma

let x = 15
let y = 17

if (x>y){
    console.log(`${x} sayısı ${y} sayısından büyüktür.`)
}
else {
    console.log(`${y} sayısı ${x} sayısından büyüktür.`)
}

// Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:

let ogrvizenot = 50;
let ogrfinalnot = 100;
let ogrortalama = ogrvizenot*0.3 + ogrfinalnot*0.7;

if(ogrortalama >= 0 && ogrortalama <=30){
    console.log(` öğrencinin ortalaması :${ogrortalama}. FF KALDINIZ` )
}
else if(ogrortalama >= 31 && ogrortalama <=49){
    console.log(` öğrencinin ortalaması :${ogrortalama}. DC KOŞULLU` )
}
else if(ogrortalama >= 50 && ogrortalama <=84){
    console.log(` öğrencinin ortalaması :${ogrortalama}. CC GEÇTİNİZ` )
}
else if(ogrortalama >= 85 && ogrortalama <=100){
    console.log(` öğrencinin ortalaması :${ogrortalama}. AA` )
}

//Örnek Tahmin Oyunu: Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulalım:

/*var randomsayi = Math.floor(Math.random()*10);
var tahmin = prompt("bir sayı tahmin et :")
if(tahmin === randomsayi && tahmin != null) alert('bildin!!!')
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
    alert("Bir daha denee :(, Random sayi: " + randomsayi);
  } */


  // ternary operatörü ve short if kullanımı
  // kosul ? dogruysa : yalnıssa 

  //eger kullanıcı adın varsa yazdır yoka kullanıcı bilginiz bulunamadı yaz
let username1 = prompt("kullanıcı bilginizi yazınız ")
let info = document.querySelector("#info")

info.innerHTML = `${username1 ? username1 : "kullanıcı bilginiz bulunamadı"}`