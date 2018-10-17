import Events from '../models/event'
import EventType from '../models/eventType'

export const getAllEvents = async(req, res) => {
  try {
    const events = await Events.find({})
    return res.send( {array: events} )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const createEvent = async( req, res ) => {
  try {


    const eventType = await EventType.findOne( { eventType: req.body.eventType } )
    const event = await Events.create( { ...req.body, createdBy: req.user._id, eventType: eventType } )
    console.log("backendddddddd");
    console.log(req.body);
    return res.send(event)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getEventsNews = async( req, res ) => {
  try {
    const events = await Events.find( {} ).populate({
      path: 'eventType',
      model: 'EventType',
      select: 'eventType'
    }).select('_id title shortText imgUrl startsAt eventType').sort({ updatedAt: "desc" })//.limit( 10 )

    return res.send( { array: events } )
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getEventById = async( req, res ) => {
  try {
    const event = await Events.findOne( { _id: req.params._id } ).populate( 'sponsors album eventType' )
    return res.send(event)
  } catch (e) {
    return res.status(500).send(e)
  }
}

//I dalje je cudno sto nisu htjeli da razdvoje evente od vijesti, ali necemo u to ulaziti
export const getNotModifiedEvents = async( req, res ) => {
  try {
    const events = await Events.find({ $where: "this.createdAt >= this.updatedAt" })
    return res.send({ array: events })
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const updateEvent = async( req, res ) => {
  try {
    const event  = await Events.findByIdAndUpdate( req.params._id, {...req.body, updatedAt: new Date()}, {new: true} )
    return res.send(event)
  } catch (e) {
    return res.status(500).send( e )
  }
}

export const getSpecificEvents = async( req, res ) => {

  try {
    const eventType = await EventType.findOne( { eventType: req.body.eventType } ).select("_id")
    const event = await Events.findOne( { eventType: eventType._id, year: req.body.year } ).populate("album")
    return res.send(event)
  } catch (e) {
    return res.status(500).send(e)
  }
}

export const getEventDates = async( req, res ) => {
  try {
    const eventType = await EventType.findOne( { eventType: req.params.eventType } ).select("_id")
    const dates = await Events.find( { eventType: eventType } ).select("_id startsAt finishedAt updatedAt createdAt")
    return res.send( { array: dates } )
  } catch (e) {
    return res.status(500).send(e)
  }
}
/*

POST localhost:8080/api/events
{
	"title": "Hajmo lopatati",
	"shortText": "Akcija lopata je u bivsoj SFRJ bila jedna od glavnih akcija za sadjenje voca i povrca.",
	"longText": "Zanimljivo je da su u II svjetskom ratu nijemci koristili kao hladno oruzje, sto je bio i glavni razlog zasto su izgubili protiv rusa.",
	"startsAt": "2018-02-04T12:09:13.741Z",
	"finishedAt": "2018-02-23T12:09:13.741Z",
	"imgUrl": "https://i.kinja-img.com/gawker-media/image/upload/s--wyms9Ipn--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/18l8wp6zl0z9cjpg.jpg",
	"eventType":"lopata",
	"participantText": "Da biste mogli ucestvovati u akciji Hajmo lopatati, morate biti sposobni podnositi ekstremno niske temperature (do -1 stepen (Celzijusa naravno, ko jos koristi Farenhajt (namjerno je pogresno napisno))).",
	"placeText": "Prijave mozete predati u kancelariji POKOP-a, Jediler-a ili kod nekih veoma starijih osoba (ne ispod 80 godina).",
	"participationText": "Osoba koja prva ukopa drugu osobu je pobjednik"

}



*/
