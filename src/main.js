if (process.env.NODE_ENV !== 'production') {
    // require('./index.pug')
    // require('./privacy.pug')
    // require('./contact.pug')
    // require('./media.pug')
    // require('./sass/main.sass')
}


var videoId = "gcSPG_dyVUQ"

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

    var watchVideo = document.getElementById('watch-video')
    var videoClose = document.querySelector('.video-close')
    var video = document.querySelector('.video')
    var videoContent = document.querySelector('.video-content')
    
    if (watchVideo && video && videoClose && videoContent) {
        watchVideo.onclick = function(e) {
            e.preventDefault()
            
            video.classList.add('video--open')

            var src = 'https://www.youtube.com/embed/' + videoId + '?ecver=1&amp;autoplay=1&amp;cc_load_policy=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;autohide=1&amp;color=white';
            videoContent.innerHTML = '<iframe allowfullscreen="true" src="' + src + '" allowtransparency="true" frameborder="0">'
        }

        videoClose.onclick = function(e) {
            e.preventDefault()

            video.classList.remove('video--open')
            videoContent.innerHTML = ''
        }
    }
}
