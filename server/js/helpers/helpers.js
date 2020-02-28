const handleIndexRoute = (request, response) => {
    response.render('../views/index.ejs')
}

const handleDetailRoute = (request, response) => {
    response.render('../views/detail.ejs')
}

const handleProfileRoute = (request, response) => {
    response.render('../views/profile.ejs')
}

const handleMatchesRoute = (request, response) => {
    response.render('../views/matches.ejs')
}

const handleErrorRoute = (request, response, next) => {
    response.status(404).render('../views/404.ejs')
}

module.exports = {
    handleIndexRoute,
    handleErrorRoute,
    handleProfileRoute,
    handleMatchesRoute,
    handleDetailRoute
}