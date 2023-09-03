/*  
try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken,
catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.
*/

let items;


try{
    items.forEach(item => {
        console.log(item)
    });
    
} catch(eror){
    console.log(eror)
}

console.log("Hata yöntemi düzgün çalışıyor.")

let info = "kodluyoruz"
console.log(info)