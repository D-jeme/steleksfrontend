import * as BoardController from '../controllers/board.controller'
import { isLoggedIn, isModerator } from '../middlewares/auth'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .get( BoardController.getActiveBoards )
  .post( isLoggedIn, isModerator, BoardController.createBoard )

router.route( '/all' )
  .get( isLoggedIn, isModerator, BoardController.getAllBoards )

router.route( '/:_id' )
  .put( isLoggedIn, isModerator, BoardController.updateBoard )
export default router
