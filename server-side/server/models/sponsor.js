const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const sponsorSchema = new Schema( {
  name: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  redirectUrl: {
    type: String,
    required: true
  },
  isActive:{
    type:Boolean,
    default:true,
  },
  isTemporary:{
    type: Boolean,
    required: true,
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: 'Moderator',
    required: true
  }
},
{
  timestamps: true
} )

export default mongoose.model( 'Sponsor',sponsorSchema )
