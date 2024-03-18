const polygons = document.querySelectorAll('.polygon')
const menu = document.querySelector('.menu')
const drawer = document.querySelector('.drawer')
const close = document.querySelector('.close')

polygons.forEach(polygon => {

    const buttons = polygon.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener('mouseover', (e) => {
            const top = e.target.closest('.column').querySelector('.column__top')

            const color = getComputedStyle(top).backgroundColor

            if (color === 'rgba(233, 117, 44, 0.7)') {
                top.classList.remove('column__st3-active', 'column__st2-active')
                top.classList.add('column__st2-2-active')
            }

            if (color === 'rgba(125, 97, 155, 0.7)') {
                top.classList.remove('column__st3-active', 'column__st2-active')
                top.classList.add('column__st3-2-active')
            }

        })

        button.addEventListener('click', (e) => {
            const top = e.target.closest('.column').querySelector('.column__top')

            const color = getComputedStyle(top).backgroundColor

            if (color.includes('233, 117, 44')) {
                top.classList.remove('column__st3-active', 'column__st2-active', 'column__st2-2-active', 'column__st3-2-active')
                top.classList.add('column__st2-3-active')
            } else {
                top.classList.remove('column__st3-active', 'column__st2-active', 'column__st2-2-active', 'column__st3-2-active')
                top.classList.add('column__st3-3-active')
            }
        })
    })

    polygon.addEventListener('mouseover', (e) => {
        const top = e.target.closest('.column').querySelector('.column__top')

        const color = getComputedStyle(top).backgroundColor

        if (color === 'rgba(233, 117, 44, 0.7)') {
            top.classList.add('column__st2-active')
        }

        if (color === 'rgba(125, 97, 155, 0.7)') {
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