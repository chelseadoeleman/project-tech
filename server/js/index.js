'use strict'

// const helmet = require('helmet')
// const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const _ = require('lodash')
const cc = require('camelcase')
const { 
    handleIndexRoute,
    handleErrorRoute,
    handleDetailRoute,
    handleProfileRoute,
    handleMatchesRoute
} = require('./helpers/helpers')
const app = express()
// app.use(helmet())
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)

app.get('/', handleIndexRoute)
app.get('/profile', handleProfileRoute)
app.get('/matches', handleMatchesRoute)
app.get('/detail', handleDetailRoute)

app.use(handleErrorRoute)

app.listen({ port: process.env.PORT || 5000 }), () => {
    console.log(`listening on port ${process.env.PORT || 5000}`)
}