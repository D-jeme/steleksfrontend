const mongoose = require( 'mongoose' )
const { Schema } = mongoose

const roleSchema = new Schema( {
  role: {
    type: String,
    unique: true,
    required: true,
  }
},
{
  timestamps: true
} )

export default mongoose.model( 'Role', roleSchema )
