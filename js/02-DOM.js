console.log(document.location.pathname)

console.log(document.head)
console.log(document.body)

console.log(document.URL)
console.log(document.baseURI)

document.body.style.backgroundColor = "a"

// DOM içinden öğe seçimi

let title = document.getElementById("title")
title.innerHTML = "degisen bilgi"
console.log(title.innerHTML)


let link = document.querySelector("#kodluyoruzlink")
link.innerHTML += " değişti"
link.style.color = "red"
link.classList.add("btn")

// promt ile kullanıcıdan bilgi almak

let bilgial = prompt("lütfen adınızı giriniz : ")

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${bilgial}</small>`



//Liste içerisindeki öğeye ulaşmak ve yeni öğe eklemek

let lastChild = document.querySelector("ul#list2>li:last-child")
lastChild.innerHTML = "son öğe değişti..."

let firstChild = document.querySelector("ul#list2>li:first-child")
firstChild.innerHTML = "ilk öğe değişti..."

let ulDOM = document.querySelector("ul#list2")
let liDOM = document.createElement('Li')   

liDOM.innerHTML = "kendi oluşturduğumuz öğe "

//ulDOM.append(liDOM)      // en sona ekler
ulDOM.prepend(liDOM)         //ilk başa ekler 


// CSS class bilgisi ekleme ve çıkartma

/* let greeting1 = document.querySelector("#greeting1")

greeting1.classList.add("text")
greeting1.classList.add("tittle")

greeting1.classList.add("new-info", "second-class" , "third-class") //birden fazla class eklemek

greeting1.classList.remove("title","second-class") //birden fazla class silmek

console.log(greeting1.classList) */