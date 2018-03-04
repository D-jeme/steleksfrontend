import * as RoleController from '../controllers/role.controller'
import { isDevVersion } from '../middlewares/auth'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .get( RoleController.getRoles )
  .post( isDevVersion, RoleController.createRole )

export default router
