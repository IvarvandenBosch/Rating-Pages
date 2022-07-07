let grinFace = document.getElementById('grin')
let mehFace = document.getElementById('meh')
let frownFace = document.getElementById('frown')
let container = document.getElementById('container')
let containerTy = document.getElementById('thankyou') 

function nextPage() {

    containerTy.classList.remove('display-none')   
    setTimeout(function(){
        container.classList.toggle('anim')
        containerTy.classList.toggle('anim')
    }, 100);
}