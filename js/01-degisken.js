let price = 100
let tax = 0.18
let pricetax = price * tax 
let total = price + pricetax
console.log(
    "fiyat : ", price,
    "Kdv oranı : ", tax,
    "kdv tutarı : ", pricetax,
    "Fiyat : ", total
)


let counter = 320
counter = counter + 1
console.log(counter)
counter += 1
console.log(counter)
counter ++
console.log(counter)

counter -= 1
console.log(counter)
counter --
console.log(counter)

counter*=10
console.log(counter)

console.log("aşağı yuvarlama :", Math.floor(1.8))
console.log("yukarı yuvarlama :", Math.ceil(1.5))
console.log("yakına yuvarlama :", Math.round(1.6))

let stringNumber ="11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log("String olanı number a çevirdik :", newNumber)


let username;
let isusername = Boolean(username)
console.log(isusername) //false

username = "user"
console.log("user name:",  Boolean(username)) //true

// veri türü öğrenme ve veri türünü değiştirme

let sayi = 111
let metin = "merhaba"
let karar = true

console.log(
    "veri türü ne: ",
    typeof(sayi)
)

console.log(
    "veri türü ne: ",
    typeof(metin)
)

console.log(
    "veri türü ne: ",
    typeof(karar)
)

//veri türlerini dönüştürme 

let nmbr1 = "11"
nmbr1 = parseInt(nmbr1)
console.log(nmbr1 , typeof(nmbr1)) //string  --> int 11

let nmbr2 = "11px"
nmbr2 = parseInt(nmbr2)
console.log(nmbr2 , typeof(nmbr2)) //string  --> int 11

let nmbr3= "11.1"
nmbr3 = Number(nmbr3)
console.log(nmbr3 , typeof(nmbr3)) //string  --> int 11.1

let nmbr4 = "11.4px"
nmbr4 = parseFloat(nmbr4)
console.log(nmbr4 , typeof(nmbr4)) //string  --> int 11.4

let nmbr5 = 55
nmbr5 = nmbr5.toString()
console.log(nmbr5 , typeof(nmbr5)) // int --> string

//Template Literals

let username1 = "ismahan"
const DOMAIN = "kodluyoruz.org"
let email = username1 + "@" +DOMAIN

//console.log("merhabalar" , username1, "sitemize hoşgeldin", "email adresin :", email)

let info =`
Merhaba ${username1} sitemize hoşgeldin..
mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2+3)*10}
günün saat bilgisi: ${new Date().getHours()}
kısa isminiz: ${username1[0]}
`
console.log(info)

//String veri türü işlemleri

let email1 = "ismhnarii@gmail.com"
let firstname = "ismahan"
let lastname = "ARI"

//string karakter sayısı --> lenght
console.log(email1.length)

//ilk karakteri bulmak --> [0]
console.log(firstname[0])

//büyük harf toUpperCase / küçük harf toLowerCase :
firstname = firstname.toUpperCase()
console.log(firstname)

firstname = firstname.toLocaleLowerCase()
console.log(firstname)

//string içinde aranan kelimenin yerini bulma --> search
console.log(email1.search("@"))
console.log(email1[7])

email1.search("olmayan") // -1

//belli bir yere kadar al --> slice

let DOMAIN2 = email1.slice(email1.search("@")+1) // @ dan sonrasını aldı
console.log(DOMAIN2)

console.log(
    DOMAIN2.slice(0,DOMAIN2.indexOf(".") ) // sadece gmail kısmı alındı 

)

//bilgiyi değiştirmek --> replace
email1=email1.replace("gmail.com","kodluyoruz.org")
console.log(email1)

// istenilen bilgi var mı --> includes
email1.includes("jnerjfn") //false
email1.includes("@") // true

// istenilen bilgiyle başladı mı (startswidth) bitti mi (endswidth)

console.log(
    email.endsWith("kodluyoruz.org") //true
)

//ilk harflerini büyük yazmak

firstname1 = "FİRST"
lastname1 ="LAST"
let fullname =`${firstname1[0].toLocaleUpperCase()}${firstname1.slice(1).toLocaleLowerCase()}
${lastname1[0].toUpperCase()}${lastname1.slice(1).toLocaleLowerCase()}`
console.log(fullname)