// let gmail = prompt('Введите вм емейл')
// let regExp = /^[a-zA-Z0-9_.-]+[A-Za-z0-9]+@[a-z]+\.(com|ru)$/
// if (gmail.match(regExp)){
//     alert('Вы успешно зарегестрировались')
// }
// else {
//     alert('Ваша почта введина не правильно')
// }

//////////////

let block = document.querySelector('.block_2')
let position =0
function move(){
    position++
    if(position>450)
    {
        return
    }
    block.style.left=position+'px'
    animation()
}
function animation (){
    setTimeout(move,10)
}
animation()
