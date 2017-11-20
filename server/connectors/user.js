import Mongoose from 'mongoose';

const UserSchema = Mongoose.Schema({
  fbid: String,
  name: String,
  email: String,
  gender: String,
  last_login: Date,
  created_at: { type: Date, default: Date.now },
});

export default Mongoose.model('User', UserSchema);
