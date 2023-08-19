    var selectedRow = null;

    const input_ekle = document.querySelector("#input")
    const btn = document.querySelector("#btn")
    const liste = document.querySelector("#myTable") 

    btn.onclick = function(){
        let td_eleman=document.createElement("input_ekle");
        td_eleman.textContent = input_ekle.value

       if (input_ekle.value.length > 0) {  // boş ekleme yapmaz!
        var g_button = document.createElement(`div`);
        g_button.classList.add(`g_button`); //class atadık
        g_button.setAttribute("class","g_button");
        
        g_button.innerText =`Güncelle`

        let tr=document.createElement("tr");
        tr.appendChild(td_eleman);

        liste.appendChild(tr);
        tr.appendChild(g_button)

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



    
    document.getElementById(`myTable`).addEventListener(`click`, (event) =>{
        var target = event.target;
        
        if (target.classList.contains("g_button")){
            var text = document.querySelector(`#input`).value
            //selectedRow = target.parentNode.parentNode;
            selectedRow = target.parentElement.parentElement;
            //selectedRow = target.parentElement.parentElement;
            
            //document.querySelector(`#input`).value = selectedRow.children[0].textContent;
            selectedRow.children[0].textContent = text;
            document.querySelector(`#input`).value = ""
        }
    })  
 