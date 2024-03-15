const polygons = document.querySelectorAll('.polygon')
const menu = document.querySelector('.menu')
const drawer = document.querySelector('.drawer')
const close = document.querySelector('.close')

// polygons.forEach(polygon => {
//     polygon.addEventListener('mouseover', (e) => {
//         const top = e.target.closest('.column').querySelector('.column__top')
//
//         const color = getComputedStyle(top).backgroundColor
//
//         top.style.backgroundColor = color.replace('0.3)', '1)')
//     })
//
//     polygon.addEventListener('mouseout', (e) => {
//         const top = e.target.closest('.column').querySelector('.column__top')
//
//         const color = getComputedStyle(top).backgroundColor
//
//         console.log(color)
//
//         // top.style.backgroundColor = color.replace('1', '0.3')
//     })
// })

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