const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const albumSchema = new Schema( {
  title: String,
  imgUrls:[String],
  eventType: {
    type: Schema.ObjectId,
    ref: 'EventType'
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'Moderator'
  }
},
{
  timestamps: true
} )

export default mongoose.model( 'Album',albumSchema )
