import Mongoose from 'mongoose';
import Bluebird from 'bluebird';

import Agenda from './agenda';
import Device from './device';
import User from './user';

Mongoose.connect('mongodb://localhost:27017/devc', {
  useMongoClient: true,
});
Mongoose.set('debug', false);
Mongoose.Promise = Bluebird;

export {
  Device, Agenda, User,
};
