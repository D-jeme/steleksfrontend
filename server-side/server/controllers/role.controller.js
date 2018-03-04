import Role from '../models/role'

export const getRoles = async(req, res) => {
  try {
    const roles = await Role.find({})
    return res.send( roles )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createRole = async( req, res ) => {
  try {
    const role = await Role.create( { role:  req.body.role}  )
    return res.send(role)
  } catch (e) {
    return res.status(500).send(e)
  }
}
/*
POST  localhost:8080/api/roles',
{ role: "superadmin" }
{ role: "admin" }
{ role: "moderator" }
*/
