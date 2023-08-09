// Filter kullanımı 
/*Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp,
 istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır. */

// 5 harften fazla olanlar ??

const products = ["mic", "color", "speaker", "desktop", "server", "mouse", "keyboard"]

const new_products = products.filter(item => item.length > 5)
console.log(new_products)

/********/ 

// Aktif kullanıcılar ??

const users = [
    {fullname: "ayşe", isActive: false},
    {fullname: "ahmet", isActive: true},
    {fullname: "asya", isActive:  true},
    {fullname: "aksel", isActive: false},
]


const active_users = users.filter(user => user.isActive === true)
console.log(active_users)

// ÖRNEK
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
    ];

 // Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
const yas_buyuk = person.filter(user => user.age > 30)
console.log(yas_buyuk)

// Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const js_bilen = person.filter(user => user.languages === "javaScript")
console.log(js_bilen) //?
