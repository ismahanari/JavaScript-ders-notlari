// Form elemanları

/* Genellikle backend'e istek yapılacağı zaman kullanılır.(Veri göndermek gibi)
En önemli parametresi method parametresidir. Method, "post" veya "get" olmak üzere iki türlü değer alabilir.
 */

/* GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. 
Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir.
*/

/*POST Methodu: Verileri arka planda gönderir.
 Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.
*/

/*Form oluşturulduktan sonra içerisine text, buton, şifre vb. tiplerinde input (giriş) elementleri oluşturulur.
 Bu input tipleri ile tasarımcının isteğine göre formlar tasarlanabilir. 
 */

let formDom = document.querySelector("#userForm")
 formDom.addEventListener(`submit`,formSubmit)

 function formSubmit(event){
    event.preventDefault() // uzun süreli gözükmesini sağladık.
    console.log("işlem gerçekleşti.")
    // input çağırma işlemi
    let scoreInputDom = document.querySelector(`#score`)
    console.log(scoreInputDom.value)
    localStorage.setItem(`score`, scoreInputDom.value)
 }  
 