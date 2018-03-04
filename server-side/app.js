import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import http from 'http'

import config from './server/config/database'

import roleRoutes from './server/routes/roleRoutes'
import boardRoutes from './server/routes/boardRoutes'
import sponsorRoutes from './server/routes/sponsorRoutes'
import moderatorRoutes from './server/routes/moderatorRoutes'
import eventRoutes from './server/routes/eventRoutes'
import eventTypeRoutes from './server/routes/eventTypeRoutes'
import albumRoutes from './server/routes/albumRoutes'

import session from 'express-session'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import Moderator from './server/models/moderator'

const app = express()
const server = http.createServer( app )

mongoose.Promise = global.Promise;
mongoose.connect( config.database, {
  useMongoClient: true,
} )

mongoose.connection.on( 'error', ( err ) => {
  console.warn( `Database error: ${ err }` )
} )

// On database connected event

mongoose.connection.on( 'connected', () => {
  //initPassport( passport, app )
  console.log( `Successfully connected to Database` ) //eslint-disable-line
} )

const port = process.env.PORT || 8080

app.use( ( req, res, next ) => {
  res.setHeader( 'Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS' )
  res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:4200' )
  res.setHeader( 'Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept' )
  res.setHeader( 'Access-Control-Allow-Credentials', true )
  next()
} )

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended:true
} ))

app.use(session({
  secret: "Adanoo",
  resave: false,
  proxy : true,
  saveUninitialized: false
}))

passport.use(new LocalStrategy(Moderator.authenticate()))

passport.serializeUser(Moderator.serializeUser())
passport.deserializeUser(Moderator.deserializeUser())

app.use(passport.initialize())
app.use(passport.session())

//OVDJE STAVLJAJTE RUTE ROUTES
app.use( '/api/roles', roleRoutes )
app.use( '/api/boards', boardRoutes )
app.use( '/api/sponsors', sponsorRoutes)
app.use( '/api/moderators', moderatorRoutes)
app.use( '/api/events',eventRoutes)
app.use( '/api/eventTypes',eventTypeRoutes)
app.use( '/api/albums', albumRoutes)

server.listen( port, () => {
  console.log( `Server app started on port ${ port }` ) // eslint-disable-line
} )
