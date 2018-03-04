import EventType from '../models/eventType'

export const getEventTypes = async(req, res) => {
  try {
    const eventTypes = await EventType.find({})
    return res.send( {array: eventTypes} )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createEventType = async( req, res ) => {
  try {
    const eventType = await EventType.create( req.body )
    return res.send(eventType)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const updateEventType = async( req, res ) => {
  try {
    const eventType = await EventType.findByIdAndUpdate( req.params._id, req.body, { new: true } )
    return res.send(eventType)
  } catch (e) {
    return res.status(500).send(e)
  }
}
/*

POST localhost:8080/api/eventTypes

{
	"eventType": "pare nisu bitne",
	"isMenuField": false
}

{
	"eventType": "lopata",
	"isMenuField": false
}

{
	"eventType": "elektrijada",
	"isMenuField": true
}

{
	"eventType": "sifi",
	"isMenuField": "true"
}

{
	"eventType": "liga robota",
	"isMenuField": "false"
}

{
	"eventType": "kviz",
	"isMenuField": "false"
}

{
	"eventType": "izleti",
	"isMenuField": "false"
}

*/
