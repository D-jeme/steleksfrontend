import Sponsor from '../models/sponsor'

export const getAllSponsors = async(req, res) => {
  try {
    const sponsors = await Sponsor.find({})
    return res.send( {array: sponsors} )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getMainSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsor.find( { isActive: true, isTemporary: false } )
    return res.send( { array: sponsors } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const updateSponsor = async (req, res) => {
  try {
    const sponsor = await Sponsor.findByIdAndUpdate( req.params._id, req.body, {new: true} )
    return res.send(sponsor)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createSponsor = async( req, res ) => {
  try {
    const sponsor = await Sponsor.create( { ...req.body, createdBy: req.user._id } )
    return res.send(sponsor)
  } catch (e) {
    return res.status(500).send(e)
  }
}

/*
POST localhost:8080/api/sponsors

{
  "name": "BHTelecom",
  "imgUrl": "https://pbs.twimg.com/profile_images/701115871192866819/6dSZUy93.jpg",
  "redirectUrl": "https://www.bhtelecom.ba/",
  "isTemporary": "false"
}

{
  "name": "eestec",
  "imgUrl": "http://www.uni-kl.de/eestec/images/demo/eestec.gif",
  "redirectUrl": "http://www.eestec-sa.ba/",
  "isTemporary": "true"
}


*/
