import $ from 'jquery'

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

const isDesktop = () => {
    const navigatorAgent =
        navigator.userAgent || navigator.vendor || window?.opera;
    return !(
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            navigatorAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            navigatorAgent.substr(0, 4)
        )
    );
};


let cont = document.querySelector(".container");

window.addEventListener("resize", () => {
    if (isDesktop()) {
        scale()
    } else {
        handlePortraitOrLandscape()
    }
});

function scale() {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    let coeff;

    if (cont.style.height) {
        const height = parseInt(cont.style.height)

        if (height > 2000) {
            console.log(height)
            cont.style.setProperty("height", `${1180}px`, "important")
        } else {
            cont.style.setProperty("height", `${2677}px`, "important")
        }
    }


    if (width > 1000) {
        if (width / height > 16 / 9) {
            coeff = height / 1080;
        } else {
            coeff = width / 1920;
        }

        cont.style.transform = `scale(${coeff})`;
    } else if (width > 650 && !isDesktop()) {
        coeff = width / 2900;

        cont.style.transform = `scale(${coeff})`;

        const top = cont.getBoundingClientRect().top + window.scrollY
        const bottom = window.innerHeight - (cont.getBoundingClientRect().top + cont.getBoundingClientRect().height)

        if (top > 0 || bottom > 0) {
            if (top > 35 || bottom > 35) {
                cont.style.setProperty("height", `${1180 + (7 * top)}px`, "important");
            } else {
                cont.style.setProperty("height", `${1180 + (6 * top)}px`, "important");
            }
        } else {
            cont.style.setProperty("height", `${1180 - (Math.abs(top * 3))}px`, "important");
        }
    } else if (!isDesktop()) {
        coeff = width / 1450;

        cont.style.transform = `scale(${coeff})`;

        const top = cont.getBoundingClientRect().top + window.scrollY

        if (top > 0) {
            if (top > 55) {
                cont.style.setProperty("height", `${2677 + (8 * top)}px`, "important");
            } else {
                cont.style.setProperty("height", `${2677 + (7 * top)}px`, "important");
            }
        } else {
            cont.style.setProperty("height", `${2677 - (Math.abs(top * 3))}px`, "important");
        }
    }
}

audios.forEach(audio => {
    audio.addEventListener("click", () => {
        dialog.style.visibility = 'visible';
    });
})

scale()

const dialogClose = dialog.querySelector('.dialog__close')

dialogClose.addEventListener("click", () => {
    dialog.style.visibility = 'hidden';
});

window.addEventListener("orientationchange", function() {
    scale();
}, false);

if (screen.orientation) { // Property doesn't exist on screen in IE11
    screen.orientation.addEventListener("change", scale);
}

function handlePortraitOrLandscape() {
    if (!isDesktop()) {
        setTimeout(afterAnUnnoticableDelay,100); // This solves the wrong-firing-order issue on Samsung Browser.
        function afterAnUnnoticableDelay() {
            if (screen.orientation) { // Mainly for Android (as of 2022)
                if (screen.orientation.angle == 0)   {    scale();     }
                if (screen.orientation.angle == 90)  {    scale();;     }
                if (screen.orientation.angle == 270) {    scale();;     }
                if (screen.orientation.angle == 180) {    scale();;     }
            } else { // Mainly for iOS (as of 2022)
                if (window.orientation == 0)   {    scale();;     }
                if (window.orientation == 90)  {    scale();;     }
                if (window.orientation == -90) {    scale();;     }
                if (window.orientation == 180) {    scale();;     }
            }
        }
    }
}
