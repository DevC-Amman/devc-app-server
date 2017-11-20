import moment from 'moment';

import { User, Device } from '../connectors';

export default {
  RootMutation: {
    async addDevice(root, { token, os, userId }) {
      const device = await Device.findOne({ token });
      if (device) {
        if (!device.userId && userId) return device.update({ userId });
        return device;
      }
      return Device.create({ token, os, userId });
    },
    async updateDevice(root, { token, userId }) {
      const device = await Device.findOne({ token });
      if (!device) return false;
      if (device.userId && !userId) return device.update({ userId: null, updated_at: new Date() });
      return device.update({ userId, updated_at: new Date() });
    },
    async fbConnect(root, { newUser, deviceToken }) {
      const device = await Device.findOne({ token: deviceToken });
      const user = await User.findOne({ fbid: newUser.fbid });
      if (user) {
        await user.update({ last_login: moment() });
        if (device && !device.userId) await device.update({ userId: user.id });

        return user;
      }

      return User.create({
        ...newUser,
        last_login: moment(),
      }).then(async (res) => {
        if (device) await device.update({ userId: res.id });

        return res;
      });
    },
  },
};
