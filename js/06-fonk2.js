// Arrow fonksiyonu kullanımı

function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}
hello("javascript")

const helloFuncV1 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2") //tek parametre için parantezler kullanılmayabilir

const helloFuncV3 = (firstName, lastName) => {console.log(`Merhaba ${firstName} ${lastName}`)}
helloFuncV3("helloFuncV3", "Last Name İnfo")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info 
}
helloFuncV4("helloFuncV4", "other İnfo")


//arrow fonksiyon, normal fonksiyonun kısaltılmış olarak yazılmasını sağlar.
// => ile arrow fonksiyon yazmış oluruz.