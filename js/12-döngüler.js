// FOR DÖNGÜSÜ
// for (başlangıç ifadesi; koşul ifadesi ; artırım ifadesi(++,--)){yapılacak işlem }

let users = ["lorem", "ıpsum", "dolor", ]

/* for (let index=0; index<10 ; index++){
    console.log(index)
} */

/* let index =0
for(; index<10; index++){
    console.log(index)
} */

// sayfada göstermeyi sağlar.

const userListDOM = document.querySelector(`#userlist`)
for(index=0; index < users.length; index++){
    const liDOM = document.createElement(`li`) //liste içerisinde li açtık
    liDOM.innerHTML = users[index]  // bilgiyi li ye atadık
    userListDOM.appendChild(liDOM) // listeye eklendi
}

/*
Break:
break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar.
Bu hususta öneminin yeniden vurgulanması gereken nokta "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.-

Etiketli Break:
Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

Continue :
Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır.

Etiketli Continue:

Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.
*/
const lorem_list =[
    `lorem`, `ipsum`, `dolor`, `anet`, `consectetur`, `adipisicting`, `elit`
]

let counter = 0
for (; counter<10; counter++){
    console.log(counter)
    if (counter ===5) {break}
}

for (; counter<10; counter++){
    if (counter === 5) {continue}
    console.log(counter)
}

const Ul_DOM = document.querySelector(`#userlist2`)

/*
for (index=0; index < lorem_list.length; index++){
    if (lorem_list[index]=="dolar") {break}
    let liDOM = document.createElement(`li`)
    liDOM.innerHTML = lorem_list[index]
    Ul_DOM.append(liDOM)
}
*/
for (index=0; index < lorem_list.length; index++){
    if (lorem_list[index]=="dolar") {continue}
    let liDOM = document.createElement(`li`)
    liDOM.innerHTML = lorem_list[index]
    Ul_DOM.append(liDOM)
}

// WHİLE DÖNGÜSÜ
// while(koşul){yapılacak işlem}

let counter2 = 0;

while(counter2 < 10){
    console.log(counter2)
    counter2++
}

let username = "" ;

while (username == "" ){
    username = prompt("kullanıcı adını giriniz: ")
    console.log(username)
}
