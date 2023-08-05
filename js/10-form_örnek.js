let userFORMDOM = document.querySelector(`#userForm`)
userFORMDOM.addEventListener(`submit`,formfunc)

function formfunc(event){
    event.preventDefault()

    const User_Name = document.querySelector(`#username`)
    const Score = document.querySelector(`#score`)

    if (User_Name.value && Score.value){
        addItem(User_Name.value, Score.value)
        User_Name.value = ""
        Score.value = ""
    }
    else {
        console.log(`hatalı giriş.`)
        }
    

}
let userListDOM = document.querySelector(`#userList`)
const addItem = (username,score) =>{
    let liDOM = document.createElement(`li`)
    liDOM.innerHTML = `
    ${username} 
    <span class="badge bg-primary rounded-pill">${score} </span>
    `
    liDOM.classList.add(`list-group-item`,`d-flex`, `justify-content-between`, `align-items-lg-center`)
    userListDOM.append(liDOM)
}