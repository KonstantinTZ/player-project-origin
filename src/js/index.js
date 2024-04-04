const polygons = document.querySelectorAll('.polygon')
const menu = document.querySelector('.menu')
const drawer = document.querySelector('.drawer')
const close = document.querySelector('.close')
const audios = document.querySelectorAll('.column__audio')
const dialog = document.getElementById("dialog1");

polygons.forEach(polygon => {

    polygon.addEventListener('mouseover', (e) => {
        const top = e.target.closest('.column').querySelector('.column__top')

        const color = getComputedStyle(top).backgroundColor

        if (color === 'rgba(233, 117, 44, 0.3)') {
            top.classList.add('column__st2-active')
        }

        if (color === 'rgba(125, 97, 155, 0.3)') {
            top.classList.add('column__st3-active')
        }

    })

    polygon.addEventListener('mouseout', (e) => {
        const top = e.target.closest('.column').querySelector('.column__top')

        top.classList.remove('column__st3-active', 'column__st2-active', 'column__st2-2-active', 'column__st3-2-active', 'column__st2-3-active', 'column__st3-3-active')
    })
})

menu.addEventListener('click', (e) => {
    if (drawer.classList.contains('drawer__close')) {
        drawer.classList.remove('drawer__close')
        drawer.classList.add('drawer__open')
    } else {
        drawer.classList.add('drawer__close')
        drawer.classList.remove('drawer__open')
    }
})

close.addEventListener('click', (e) => {
    if (drawer.classList.contains('drawer__close')) {
        drawer.classList.remove('drawer__close')
        drawer.classList.add('drawer__open')
    } else {
        drawer.classList.add('drawer__close')
        drawer.classList.remove('drawer__open')
    }
})


let cont = document.querySelector(".container");

window.addEventListener("resize", scale);

function scale() {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let coeff;

    if (width > 1000) {
        if (width / height > 16 / 9) {
            coeff = height / 1080;
        } else {
            coeff = width / 1920;
        }

        cont.style.transform = `scale(${coeff})`;
    } else {
        coeff = width / 2558;

        cont.style.transform = `scale(${coeff})`;
    }
}

scale();

audios.forEach(audio => {
    audio.addEventListener("click", () => {
        dialog.style.visibility = 'visible';
        scale()
    });
})


const dialogClose = dialog.querySelector('.dialog__close')

dialogClose.addEventListener("click", () => {
    dialog.style.visibility = 'hidden';
});
