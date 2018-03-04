const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const eventTypeSchema = new Schema( {
  eventType: {
    type: String,
    unique: true,
    required: true
  },
  isMenuField: {
    type: Boolean,
    required: true
  }
},{
    timestamps: true
  } )

export default mongoose.model( 'EventType', eventTypeSchema )
