import * as EventTypeController from '../controllers/eventType.controller'
import * as AuthStuff from '../middlewares/auth'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .get( EventTypeController.getEventTypes )
  .post( AuthStuff.isLoggedIn, AuthStuff.isModerator, EventTypeController.createEventType )

router.route( '/:_id' )
  .put( AuthStuff.isLoggedIn, AuthStuff.isModerator, EventTypeController.updateEventType )
export default router
