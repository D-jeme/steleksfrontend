import * as ModeratorController from '../controllers/moderator.controller'
import passport from 'passport'
import * as AuthStuff from '../middlewares/auth'
import Role from '../models/role'

const express = require( 'express' )

const router = express.Router()

router.route( '/' )
  .get( AuthStuff.isLoggedIn, AuthStuff.isAdmin, ModeratorController.getModerators )
  .post( AuthStuff.isLoggedIn, AuthStuff.isAdmin, ModeratorController.createModerator )
  .delete( AuthStuff.isLoggedIn, AuthStuff.isAdmin, ModeratorController.removeModerator )
  .put( AuthStuff.isLoggedIn, AuthStuff.isAdmin, ModeratorController.changeModeratorCredentials )

router.route( '/admin' )
.get( AuthStuff.isLoggedIn, AuthStuff.isSuperAdmin, ModeratorController.getModerators )
  .post( AuthStuff.isLoggedIn, AuthStuff.isSuperAdmin, ModeratorController.createAdmin )
  .put( AuthStuff.isLoggedIn, AuthStuff.isSuperAdmin, ModeratorController.changeAdminCredentials )

router.route( '/superadmin' )
  .post( AuthStuff.isDevVersion, ModeratorController.createSuperAdmin )

router.post('/login', passport.authenticate("local", {
    failureRedirect: 'login'
}), async(req,res) => {

  delete req.user._doc.hash
  delete req.user._doc.salt

  req.user._doc.role = (await Role.findOne( { _id: req.user._doc.role } )).role

  res.send(req.user);
})

router.get('/logout', AuthStuff.isLoggedIn, (req, res) => {
        req.logout();
        res.send({message: 'You logged out'})
      })

export default router
