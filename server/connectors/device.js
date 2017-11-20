import Mongoose from 'mongoose';

const DevicesSchema = Mongoose.Schema({
  userId: Number,
  token: String,
  os: String,
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

export default Mongoose.model('Device', DevicesSchema);
