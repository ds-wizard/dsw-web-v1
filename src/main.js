if (process.env.NODE_ENV !== 'production') {
    // require('./index.pug')
    // require('./privacy.pug')
    // require('./contact.pug')
    // require('./media.pug')
    // require('./sass/main.sass')
}


window.onload = function() {
    var mobileMenu = document.querySelector('.mobile-menu')
    var openMenu = document.querySelector('.open-mobile-menu')
    var closeMenu = document.querySelector('.close-mobile-menu')

    openMenu.onclick = function() {
        mobileMenu.classList.add('active')
    }

    closeMenu.onclick = function() {
        mobileMenu.classList.remove('active')
    }
}
