import Moderator from '../models/moderator'
import Role from '../models/role'
import passport from 'passport'
import { basename } from 'path'
import { ADMIN, SUPER_ADMIN, MODERATOR } from '../config/config'

export const getModerators = async(req, res) => {
  try {
    const moderators = await Moderator.find({}).populate('role').select('-hash -password')
    return res.send( { array: moderators } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createModerator = async( req, res ) => {

  try {
    const role = await Role.findOne({ role: MODERATOR })
    let newModerator = {...req.body, role: role}

    delete newModerator.password
    Moderator.register(new Moderator(newModerator), req.body.password, (err, data) => {
      if(err)
        return res.status(400).send( err )
      delete data._doc.hash
      delete data._doc.salt

      return res.send(data)
    })

  } catch (e) {
    return res.status(500).send(e)
  }


}

export const createAdmin = async( req, res ) => {
  try {
    const role = await Role.findOne({ role: ADMIN })

    const admins = await Moderator.find( { role: role } )
    if(admins.length != 0) return res.status( 403 ).send( { message: 'Admin Role must be unique!' } )
    let newAdmin = {...req.body, role: role}
    delete newAdmin.password
    await Moderator.register(new Moderator(newAdmin), req.body.password, (err, data) => {
      if(err)
        return res.status(400).send( err )
      delete data._doc.hash
      delete data._doc.salt

      return res.send(data)
    })

  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createSuperAdmin = async( req, res ) => {
  try {
    const role = await Role.findOne( { role: SUPER_ADMIN } )
    let newSuperAdmin = {...req.body, role: role}

    delete newSuperAdmin.password
    //Pojma nemam zasto nece sa await
    Moderator.register(new Moderator(newSuperAdmin), req.body.password, (err, data) => {
      if(err)
        return res.status(400).send( err )
      delete data._doc.hash
      delete data._doc.salt

      return res.send(data)
    })
  } catch (e) {
      return res.status(500).send(e)
  }
}

export const changeAdminCredentials = async( req, res ) => {
  try {
    const role = await Role.findOne( { role: ADMIN } )
    const admin = await Moderator.findOne( { role: role } )

    if(!admin) return res.status(404).send({ message: 'Admin not found' })
    admin.username = req.body.username
    admin.setPassword( req.body.password, (err) => {
      if(err) return res.status(400).send(err)
      admin.save(( err, data ) => {

        if(err) return res.status(400).send(err)
        delete data._doc.salt
        delete data._doc.hash

        return res.send(data)
      })
    } )


  } catch (e) {
    return res.status(500).send(e)
  }
}

export const removeModerator = async( req, res ) => {
  try {
    const moderator = await Moderator.findOne( { username: req.body.username } ).populate( 'role' )
    if( moderator.role.role != MODERATOR ) return res.status(403).send( { message: 'You can only remove moderators' } )
    if(moderator.isActive) moderator.isActive = false
    else moderator.isActive = true
    moderator.save( (err) => {
      if(err) return res.status(400).send( err )
      delete moderator._doc.salt
      delete moderator._doc.hash
      return res.send( moderator )
    } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const changeModeratorCredentials = async( req, res ) => {
  try {
    const moderator = await Moderator.findOne( { username: req.body.username } ).populate( 'role' )
    if( !moderator ) return res.status(404).send( { message: "Moderator not found" } )

    if( !moderator.isActive ) return res.status(403).send( { message: 'Account is not active' } )

    if( moderator.role.role != MODERATOR ) return res.status( 403 ).send( { message: "It's not moderator" } )

    moderator.username = req.body.newUsername? req.body.newUsername: req.body.username
    moderator.setPassword( req.body.password, (err) => {
      if(err) return res.status(400).send(err)
      moderator.save(( err, data ) => {

        if(err) return res.status(400).send(err)
        delete data._doc.salt
        delete data._doc.hash

        return res.send(data)
      })
    } )
  } catch (e) {
    return res.status(500).send(e)
  }
}
/*

POST localhost:8080/api/moderators/
{
	"firstname": "Mujo",
  "lastname": "Mujic",
  "email": "Mujo@krampa.com",
  "imageUrl": "https://oinkgms.com/mujo/img/mujo_title_2.png",
  "username": "mujo",
  "password": "mujo",
  "role": "moderator"
}

*/
