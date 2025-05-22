ScrollReveal().reveal('.left-move', { reset: true, delay: 700, origin: 'left', distance: '500px' });
ScrollReveal().reveal('.right-move', { reset: true, delay: 700, origin: 'right', distance: '500px' });

ScrollReveal().reveal('.nav-item', { reset: true, duration: 500, interval: 500, origin: 'top', distance: '50px' });

let btnReadMore = document.querySelectorAll('.btn-read-more');
let DivReadMore = document.querySelectorAll('.div-read-more')

let readMin = document.querySelectorAll('.read-min')

for (let i = 0; i < btnReadMore.length; i++) {
    btnReadMore[i].onclick = function () {
        DivReadMore[i].style.display = 'block'
    }
}
for (let i = 0; i < readMin.length; i++) {
    readMin[i].onclick = function () {
        DivReadMore[i].style.display = 'none'
    }
}


window.addEventListener('scroll', function () {
    let height = window.innerHeight;
    let btnTop = document.querySelector('.btn-Top');
    if (window.scrollY > height) {
        btnTop.style.display = 'flex'
    }
    else {
        btnTop.style.display = 'none'
    }
});  

