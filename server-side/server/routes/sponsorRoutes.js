import * as SponsorController from '../controllers/sponsor.controller'
import * as AuthStuff from '../middlewares/auth'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .get( AuthStuff.isLoggedIn, AuthStuff.isModerator, SponsorController.getAllSponsors )
  .post( AuthStuff.isLoggedIn, AuthStuff.isModerator, SponsorController.createSponsor )

router.route( '/main' )
  .get( SponsorController.getMainSponsors )

router.route( '/:_id' )
  .put( AuthStuff.isLoggedIn, AuthStuff.isModerator, SponsorController.updateSponsor )

export default router
