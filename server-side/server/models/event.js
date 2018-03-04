const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const eventSchema = new Schema( {
  title: String,
  shortText: String,
  longText: String,
  startsAt:Date,
  finishedAt:Date,
  year: String,
  imgUrl: String,
  participantText: String,
  placeText: String,
  participationText: String,
  rankings:{
      type:Object,
      default:{
          firstPlace:null,
          secondPlace:null,
          thirdPlace:null,
      }
  },
  album:{
    type:Schema.ObjectId,
    ref:'Album',
  },
  sponsors:[ {
          type:Schema.ObjectId,
          ref:'Sponsor',
      } ],
  eventType:{
      type:Schema.ObjectId,
      ref:'EventTypes',
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'Moderator',
  }
},
{
  timestamps: true
} )

export default mongoose.model( 'Event',eventSchema )
