module.exports = app => {

    app
    .get('/geoloc', app.api.geoloc.address)

}