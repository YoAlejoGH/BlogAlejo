const imagen1 = document.querySelector('.imagen1');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(imagen1)

imagen1.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != imagen1){
        
        menu.classList.toggle("spread")
    }
})
