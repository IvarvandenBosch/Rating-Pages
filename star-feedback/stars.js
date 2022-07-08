let star1 = document.getElementById('star1')
let star2 = document.getElementById('star2')
let star3 = document.getElementById('star3')
let star4 = document.getElementById('star4')
let star5 = document.getElementById('star5')

let strReaction1 = document.getElementById('str-1')
let strReaction2 = document.getElementById('str-2')
let strReaction3 = document.getElementById('str-3')
let strReaction4 = document.getElementById('str-4')
let strReaction5 = document.getElementById('str-5')

function starsOver1() {
    star1.classList.add('color-gold')
    star1.classList.add('fa-solid')
    star1.classList.remove('fa-regular')
}

function starsOut1() {
    star1.classList.remove('color-gold')
    star1.classList.remove('fa-solid')
    star1.classList.add('fa-regular')
}

function starsOver2() {
    star2.classList.add('color-gold')
    star2.classList.add('fa-solid')
    star2.classList.toggle('fa-regular')
}

function starsOut2() {
    star2.classList.remove('color-gold')
    star2.classList.remove('fa-solid')
    star2.classList.add('fa-regular')
}

function starsOver3() {
    star3.classList.add('color-gold')
    star3.classList.add('fa-solid')
    star3.classList.remove('fa-regular')
}

function starsOut3() {
    star3.classList.remove('color-gold')
    star3.classList.remove('fa-solid')
    star3.classList.add('fa-regular')
}

function starsOver4() {
    star4.classList.add('color-gold')
    star4.classList.add('fa-solid')
    star4.classList.remove('fa-regular')
}

function starsOut4() {
    star4.classList.remove('color-gold')
    star4.classList.remove('fa-solid')
    star4.classList.add('fa-regular')
}

function starsOver5() {
    star5.classList.add('color-gold')
    star5.classList.add('fa-solid')
    star5.classList.remove('fa-regular')
}

function starsOut5() {
    star5.classList.remove('color-gold')
    star5.classList.remove('fa-solid')
    star5.classList.add('fa-regular')
}

function starOver1() {
    starsOver1()
    strReaction1.classList.remove("display-none")
}

function starOut1() {
    starsOut1()
    strReaction1.classList.add("display-none")
}

function starOver2() {
    starsOver1()
    starsOver2()
    strReaction2.classList.remove("display-none")
}

function starOut2() {
    starsOut1()
    starsOut2()
    strReaction2.classList.add("display-none")
}

function starOver3() {
    starsOver1()
    starsOver2()
    starsOver3()
    strReaction3.classList.remove("display-none")
}

function starOut3() {
    starsOut1()
    starsOut2()
    starsOut3()
    strReaction3.classList.add("display-none")
}

function starOver4() {
    starsOver1()
    starsOver2()
    starsOver3()
    starsOver4()
    strReaction4.classList.remove("display-none")
}

function starOut4() {
    starsOut1()
    starsOut2()
    starsOut3()
    starsOut4()
    strReaction4.classList.add("display-none")
}


function starOver5() {
    starsOver1()
    starsOver2()
    starsOver3()
    starsOver4()
    starsOver5()
    strReaction5.classList.remove("display-none")
}

function starOut5() {
    starsOut1()
    starsOut2()
    starsOut3()
    starsOut4()
    starsOut5()
    strReaction5.classList.add("display-none")
}
