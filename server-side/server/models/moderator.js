const mongoose = require( 'mongoose' )
const { Schema } = mongoose,
      passportLocalMongoose = require('passport-local-mongoose');

const moderatorSchema = new Schema( {
  firstname: String,
  lastname: String,
  email: String,
  imageUrl: String,
  username: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: Schema.ObjectId,
    ref: 'Role',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true
} )

moderatorSchema.plugin(passportLocalMongoose, {
  findByUsername: ( model, queryParameters ) => {
    queryParameters.isActive = true
    return model.findOne(queryParameters)
  }
});

export default mongoose.model( 'Moderator', moderatorSchema )
