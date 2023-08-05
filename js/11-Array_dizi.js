// Diziler (Array)

//Array oluşturma

let domain = "kod"
let isActive = false
let items = [15, 25, 35, domain, isActive]
console.log(items)

let emptyArray = [] // boş list.

// Array içerisindeki eleman sayısını öğrenmek
console.log(
    items.length 
)

document.querySelector(`#info`).innerHTML = items.length

// Array içindeki ilk elemanın çağrılması
console.log( items[0])

// Array içindeki son elemanın çağrılması
console.log( items[items.length -1])

// Değişken içindeki bilginin Array olup olmadığının kontrol edilmesi
console.log(
    typeof(items) //object olarak çıktı verir.
)
console.log(
    Array.isArray(items) //true çıktısını verir.
)

// Hangileri Array ?

console.log(Array.isArray("")) // false

//Array : sona eleman ekleme -> push
items.push(50)
console.log("50 : ", items)

//Array : başa eleman ekleme -> unshift
items.unshift(5)
console.log("5 : ", items)

//Array : sondaki eleman silmek -> pop
let lastItem = items.pop()
console.log("lastItem: ", lastItem, ", items: ", items)

//Array : sondaki eleman silmek -> shift
let firstItem = items.shift()
console.log("firstItem: ", firstItem, ", items: ", items)

//Array içindeki bir öğenin bilgisinin değiştirilmesi:
items[0]=105; //ilk elemanın değişmesi
console.log(items)

items[items.length-1]=1000;
console.log(items)

items[100]=4000;
console.log(items) // 100. sıraya kaydeder aradaki boşluklara boş eleman ekler.

// Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder.
// Boolean (true/false) olarak çıktı alınır.
const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);

//Array içinde array :
let users = ["ayse","hulya","fatma"]
let users2 = ["ahmet","hasan","mehmet"]

items.unshift(users)
items.push(users2)

console.log(items)

console.log(items,length)
console.log(items[0].length) // array içindeki istediğimiz arrayın lenght bilgisini aldık.
console.log(items[0][0]) //ayşe bilgisine ulaşıldı

// Array içerisinden öğe ayirmak -> splice(pos,item?)
let newitems = items.splice(2,0)
console.log("newitems", newitems)
console.log("items", items)

// Array içerisindeki öğenin index bilgisini bulmak -> indexOf(`value`)
items.unshift("lorem")
items.push("ipsun")
console.log(items.indexOf("ipsun"))

// Array kopyalamak -> slice, [..E56]
let copyItems = items
console.log(items)

copyItems.pop()
console.log("copyitems", copyItems)
console.log("items", items) //her ikisini de aynı yapar

copyItems = items.slice()
copyItems.pop()
console.log("copyitems", copyItems)
console.log("items", items) // asıl arrayı değiştirmez

let es6items = [...items] //es6 ve sonrasında gelen kopyalama işlemi
console.log(es6items)
let allusers = [...users, ...users2] //es6 birden fazla array yapısını birleştirir.
console.log(allusers)

// Array içerisindeki bilgiyi stringe çevirmek -> toString,join
console.log(allusers.toString())
console.log(allusers.join("---")) // çevirirken araya --- koydu

// İstediğimiz İndex bilgisine öğe eklemek -> splice(index,0,value)
allusers.splice(allusers.length-1,0,"melissa")
allusers.splice(Math.floor(allusers.length /2),0,"lorem")
console.log(allusers)