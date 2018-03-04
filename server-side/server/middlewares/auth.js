import Role from '../models/role'
import * as Constants from '../config/config'

export const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
      return next()
    }
    res.status(401).send({message:'You have to login!'})
}
export const isModerator = async(req, res, next) => {
    try {
      const role = await Role.findById(req.user.role)
      if(role.role == Constants.MODERATOR)
          return next()
    } catch (e) {
      res.status(500).send(e);
    }
    res.status(401).send({message: 'You are not authorized to do that! You have to be moderator'});
}
export const isAdmin = async(req, res, next) => {
    const role = await Role.findById(req.user.role)
    if(role.role == Constants.ADMIN)
        return next()
    res.status(401).send({message: 'You are not authorized to do that! You have to be admin'});
}
export const isSuperAdmin = async(req, res, next) => {
    const role = await Role.findById(req.user.role)

    if(role.role == Constants.SUPER_ADMIN)
        return next()
    res.status(401).send({message: 'You are not authorized to do that! You have to be super superadmin'});
}

export const isDevVersion = ( req, res, next ) => {
  if(Constants.IS_DEV_VERSION) return next()

  return res.status(401).send({message: "Not dev version"})
}
