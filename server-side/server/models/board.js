const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const boardSchema = new Schema( {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  isActive:{
    type:Boolean,
    default:true,
  }
},
{
  timestamps: true
} )

export default mongoose.model( 'Board', boardSchema )
