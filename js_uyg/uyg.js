

    const input_ekle = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    const liste = document.querySelector("#myTable") 

    btn.onclick = function(){
        let td_eleman=document.createElement("input_ekle");
        td_eleman.textContent = input_ekle.value
       if (input_ekle.value.length > 0) {  // boş ekleme yapmaz!

        let tr=document.createElement("tr");
        tr.appendChild(td_eleman);

        liste.appendChild(tr);

        input_ekle.value = "";
       }

       else{
        alert("lütfen birşeyler yazın !")
       }
    }

    //sondan başa doğru sildirir.
    function deleteRow(ele){
        var table = document.getElementById(`myTable`) 
        var rowcount = table.rows.length

        if (rowcount<1){
            alert("silinecek satır yok")
            return
        }
        else{
            table.deleteRow(rowcount-1)
        }
    }


    // Üzerine çift tıklanınca siliniyor ve güncelleme işlemi yapılıyor.
    document.getElementById(`myTable`).addEventListener(`dblclick`, function(event){
        
        event.target.parentNode.removeChild(event.target)
        var yeni_bilgi = prompt("lütfen yeni bilgi giriniz : ")
        let tablo = document.querySelector("#myTable")
        tablo.innerHTML = `${tablo.innerHTML} ${yeni_bilgi}`
        
    })

    
