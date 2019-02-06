if (process.env.NODE_ENV !== 'production') {
    require('./index.pug')
    require('./privacy.pug')
    require('./contact.pug')
    require('./media.pug')
    require('./sass/main.sass')
}
