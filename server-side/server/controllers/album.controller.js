import Album from '../models/album'
import EventType from '../models/eventType'

export const getAlbums = async( req, res ) => {
  try {
    const albums = await Album.find({})
    return res.send( {array: albums} )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createAlbum = async( req, res ) => {
  try {
    const eventType = await EventType.findOne( { eventType: req.body.eventType } )
    const album = await Album.create( { ...req.body, createdBy: req.user._id, eventType: eventType._id } )
    return res.send(album)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getSpecificAlbums = async( req, res ) => {
  try{
    const eventType = await EventType.findOne({ eventType: req.params.eventType })
    const specAlbum = await Album.find({ eventType: eventType._id }).sort({ updatedAt: "desc" })
    return res.send( { array:specAlbum } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getOtherAlbums = async( req, res ) => {
  try{
    const eventTypes = await EventType.find({ eventType: { $nin: req.body.deprecatedEventTypes } }).select("_id")
    const otherAlbums = await Album.find({ eventType: { $in: eventTypes } })
    return res.send( { array:otherAlbums } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getRepresentativeAlbums = async( req, res ) => {
  try {
    const eventTypes = await EventType.find( {} ).select( "_id" )
    const albums = await Album.find( { eventType: { $in: eventTypes } }, { imgUrls: { $slice: 4 } } ).skip((req.body.skip? req.body.skip: 0) * 10).limit(10).populate({
      path: 'eventType',
      model: 'EventType',
      select: 'eventType'
    })
    return res.send({ array: albums })
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getAlbumById = async( req, res ) => {
  try {
    const album = await Album.findById( req.params._id )
    return res.send( album )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const updateAlbum = async( req, res ) => {
  try {
    const album = await Album.findByIdAndUpdate( req.params._id, req.body, { new: true } )
    return res.send(album)
  } catch (e) {
    return res.status(500).send(e)
  }
}
