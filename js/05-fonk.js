// Fonksiyon tanımlama :

function HelloWorld(){
    console.log("Hello World")
}

function Hello(){
    console.log("Hello")
    HelloWorld()
}

Hello()

function printHello(name){ //parametre aldı 
    console.log("merhaba " + name)
}

printHello("ismahan") // fonksiyon parametre ile çağrıldı

function mesajver(){
    alert("Herkese Merhabalar!")
}
mesajver()

function MesajVer(ad,soyad){
    console.log(`merhaba ${ad} ${soyad}`);
}
MesajVer("ismahan","Arı")

//Geri dönüş değeri
function topla(sayi1,sayi2){
    return sayi1 + sayi2
}
let sonuc = topla(10,20);
console.log(sonuc)