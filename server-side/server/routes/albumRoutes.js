import * as AlbumController from '../controllers/album.controller'
import * as AuthStuff from '../middlewares/auth'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .options( AlbumController.getRepresentativeAlbums )
  .post( AuthStuff.isLoggedIn, AuthStuff.isModerator, AlbumController.createAlbum )

router.route( '/all' )
  .get( AlbumController.getAlbums )

router.route( '/getspecificalbums/:eventType' )
  .get( AlbumController.getSpecificAlbums )

router.route( '/getotheralbums' )
  .options( AlbumController.getOtherAlbums )

router.route( '/:_id' )
  .get( AlbumController.getAlbumById )
  .put( AuthStuff.isLoggedIn, AuthStuff.isModerator, AlbumController.updateAlbum )

export default router
