// forEach
// JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.
// forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

const products = ["leptop", "phone", "speaker", "desktop pc", "server", "mouse", "keyboard"]
//products.forEach((products, index, array)=> console.log(array[index]= products+ " 111") )
products.forEach((products, index, array)=> array[index]= `${products.toUpperCase()}`) //heer birini büyük harflerle yazar.

console.log(products)

/*
const userListDOM = document.querySelector(`#userlist`)
for(index=0; index < users.length; index++){
    const liDOM = document.createElement(`li`) //liste içerisinde li açtık
    liDOM.innerHTML = users[index]  // bilgiyi li ye atadık
    userListDOM.appendChild(liDOM) // listeye eklendi
}
*/
// Yukarıdaki örneği forEach ile yapalım.
const userListDOM = document.querySelector(`#userlist`)

products.forEach( item => {
    const liDOM = document.createElement(`li`)
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
}

)