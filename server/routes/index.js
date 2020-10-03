module.exports = app => {

    // Base URLS
    app.use('/api', require('./base.routes.js'))
    app.use('/api', require('./auth.routes.js'))

}

