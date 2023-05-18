let ad = prompt("Adınızı giriniz")
let info = document.querySelector("#isim")
info.innerHTML = ad

var tarih = new Date();
var tarih2 = tarih.getHours() + ":" + tarih.getMinutes() + ":" + tarih.getSeconds()
let tarihekle = document.querySelector("#saat")
tarihekle.innerHTML = tarih2