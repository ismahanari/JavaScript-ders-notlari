// Objeler 
/*
Objeler, içerisinde birden fazla değeri depolayan yapılardır.
Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.
Objeler değiştirilebilen veri tiplerindendir.

Objeler üç şekilde oluşturulabilir.
Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla. 
Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir.
Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.

Object Literals
-  let countriesTalkSpanish = {
continent: "south america",
language: "spanish"
};

New Keyword ile Obje Oluşturmak
-  let countriesTalkFrench = new Object();     
countriesTalkFrench.continent = "africa";     
countriesTalkFrench.language = "french"; 

! Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir.

Object.create
-  let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.


*/ 
//  Object key -- value
let item = {              //new Object{}
    brand: "Apple",
    model: "Macbook Pro",      //1model "" içince yazılır.
    "1kg": 1
}           
console.log(item.brand, item["brand"])    //Aplle  Aplle
console.log(item["1kg"])

// Anahtar bilgisine yeni değer eklemek
item.brand=  "Mac"
item["brand"] = "mac1"
console.log(item)

// Yeni bilgi eklemek
item.version = "10.54.2"
console.log(item)

// Anahtar bilgilerine ulaşarak (keys) -> Object.keys(item)
keys = Object.keys(item)
console.log(keys)
console.log(Object.keys(item))

keys.forEach(element => {
    console.log(element)
    console.log(item[keys])
});

// değer bilgilerine ulaşmak (values) -> object.values(item)

console.log(Object.values[item])

let values = Object.values(item)

values.forEach(valuesInfo => {
    console.log(valuesInfo)
    
})

/*
* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
** Dot notation: obj.property 
** Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.
*/


// Method Ekleme

let user = {
    firstName: "İsmahan",
    lastName: "Arı",
    shortName: function(){
        return `${this.firstName[0].toUpperCase()}.${this.lastName}`
    } }

console.log(user)

// Object ve Array Destructuring 
//Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

let settings = {
    userName : "LoremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName:"kodluyoruz.org"
}

//obje içerisindeki bilgilerin tek seferde çıkarılması
/* let userName = settings.userName
console.log(userName) */

// rename && destructuring
let {userName:user1 , password, isActive, ip:serverIP, serverName} = settings
console.log(user1, password, isActive, serverIP, serverName)
console.log(settings)
console.log(user1)

//obje içindeki bazı bilgilerin çıkarılması (objeyi kesme işlemi)

let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
console.log(userName2, password2, isActive2, newSettings)

// objenin destructuring ile kopyalanması

/* hatalı kullanım
let settings2 = settings
settings2.userName = "değişen bilgi"
console.log("settings", settings)
console.log("settings2", settings)  
*/


// doğru kullanım
let settings2 = {...settings}
console.log("settings", settings)
console.log("settings2", settings)

let score = [100, 200, 300, 400] 
let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

let copyScore = [...score]
console.log(copyScore)