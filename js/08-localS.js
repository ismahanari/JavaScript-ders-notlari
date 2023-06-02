// LOCALSTORAGE
// Bu iki kayıt türü arasındaki en temel fark localStorage kayıtları zaman aşımı olmaksızın tutarken 
//sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır. Ancak LocalStorage ve SessionStorage 
//kullanıcı tarafından kolayca okunabilir ve değiştirilebilir, bu sebeple uygulama içerisindeki 
//güvenlik ile ilgili verilerin depolanmaması gerekmektedir. 
//LocalStorage ve SessionStorage sayfalar arasındaki ve client işlemleri arasındaki hassas olmayan verilerin taşınmasında tercih edilmektedir.

/* Veri Ekleme
 localStorage built-in fonksiyonları ile veriler üzerinde işlem yapmak oldukça kolaydır. setItem metodu kayıt eklemek için kullanılmaktadır.
 Bu metot iki parametre almaktadır.
 Bunların ilki ‘key’ yani anahtar adı ikincisi ise ‘value’ yani o anahtara karşılık gelen değeri ifade etmektedir.
  */
 
 localStorage.setItem("kedi","Ayran");
 localStorage.setItem("kedy","kedyy")


 /*Veri Okuma
 localStorage üzerinde kayıtlı olan anahtarları okumak için getItem metodu kullanılır.
  getItem metodu anahtar adını kendisine parametre olarak alıp geriye değeri döndürmektedir.
  */
 console.log( localStorage.getItem("kedi"))


  /*Veri Silme
  Tüm verileri silmek istiyorsak clear() metodunu kullanmamız gerekir. 
  Şayet istediğimiz bir anahtarı silmek istiyorsak removeItem() metodunu kullanmamız gerekmektedir.
   removeItem metodu kendisine silinecek anahtarı parametre olarak almaktadır.
   */
  console.log(localStorage.removeItem("kedy"))

  let user = {username : "ismahanArı", isActive:true}
  console.log(user)
  localStorage.setItem(`userInfo`,JSON.stringify(user))
  //JSON.stringify stringe çevirir ve görünmesini sağlar.

  let userInfo = localStorage.getItem(`userInfo`) //bilgiyi al
  userInfo = JSON.parse(userInfo) //veriyi düzgün alabilmek için yeniden dönüştürdük.
  console.log(userInfo)



  // ÖRNEK

let counter = localStorage.getItem(`counter`) ? Number(localStorage.getItem("counter")) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem(`counter`,counter)
    counterDOM.innerHTML = counter
}


