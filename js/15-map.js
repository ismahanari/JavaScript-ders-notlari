// Map kullanımı

/*Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır
 ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.

 array.map( function(value, index, array), this)

 array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
 value : Üzerinde işlem yapılan dizi değerini belirtir.
 array : Üzerinde işlem yapılan diziye erişimi sağlar
 this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.
*/
const users =["AYSE", "MehMet", "TugCE", "AKSEL"]
const new_users = users.map( user => user.toLowerCase())
console.log(new_users)

/* const users_obj = users.map( item => 
    {
        return{
            username: item, shortname: `${item[0]}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    }
    )
console.log(users_obj) */

const users_obj2 = users.map( item => (
    {username: item, shortname: `${item[0]}.`, newname: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
)
)
console.log(users_obj2) 