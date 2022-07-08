let grinFace = document.getElementById('grin')
let mehFace = document.getElementById('meh')
let frownFace = document.getElementById('frown')
let container = document.getElementById('container')
let containerTy = document.getElementById('thankyou')
let smlRating = document.getElementById('sml-rating')

function nextPage() {

    containerTy.classList.remove('display-none')   
    setTimeout(function(){
        container.classList.toggle('anim')
        containerTy.classList.toggle('anim')
    }, 100);
}

function testFunc() {
    console.log('test')
}

function displayNone() {
    smlRating.classList.toggle('anim')
    setTimeout(function(){
        smlRating.classList.add('display-none')
    }, 1000);
}