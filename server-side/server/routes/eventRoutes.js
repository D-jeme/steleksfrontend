import * as EventController from '../controllers/event.controller'
import * as AuthStuff from '../middlewares/auth'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .get( AuthStuff.isLoggedIn, AuthStuff.isModerator, EventController.getAllEvents )
  .post( AuthStuff.isLoggedIn, AuthStuff.isModerator, EventController.createEvent )

router.route( '/news' )
  .get( EventController.getEventsNews )

router.route( '/notmodified' )
  .get( AuthStuff.isLoggedIn, AuthStuff.isModerator, EventController.getNotModifiedEvents )

router.route( '/getSpecificEvents' )
  .options( EventController.getSpecificEvents )

router.route( '/:eventType/dates' )
  .get( EventController.getEventDates )

router.route( '/:_id' )
  .get( EventController.getEventById )
  .put( AuthStuff.isLoggedIn, AuthStuff.isModerator, EventController.updateEvent )

export default router
