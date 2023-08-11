

    const input_ekle = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    const liste = document.querySelector("#myTable") 

    btn.onclick = function(){
       
        let td_eleman=document.createElement("input_ekle");
        td_eleman.textContent = input_ekle.value

        let tr=document.createElement("tr");
        tr.appendChild(td_eleman);

        liste.appendChild(tr);

        input_ekle.value = "";

    }


    function deleteRow(ele){
        var table = document.getElementById(`myTable`)
        var rowcount = table.rows.length

        if (rowcount<1){
            alert("silinecek satır yok")
            return
        }
        if(ele){
            ele.parentNode.parentNode.remove()
            //belirli satırları sil
             //çalışmıyor !

        }
        else{
            table.deleteRow(rowcount-1)
        }
    }