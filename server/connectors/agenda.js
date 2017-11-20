import Mongoose from 'mongoose';

const AgendaSchema = Mongoose.Schema({
  title: String,
  date: Date,
  location: {
    name: String,
    long: Number,
    lat: Number,
  },
  imageUrl: String,
  activities: [{
    title: String,
    description: String,
    start_at: Date,
    end_at: Date,
    hosts: [{
      name: String,
      title: String,
      subtitle: String,
    }],
  }],
  active: Boolean,
  created_at: { type: Date, default: Date.now },
});

export default Mongoose.model('Agenda', AgendaSchema);
