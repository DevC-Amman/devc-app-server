import _ from 'lodash';
import moment from 'moment';
import { Agenda, Device } from '../connectors';
import { admin } from '../fcm';

export default {
  RootQuery: {
    agendas() {
      return Agenda.find().where('date').gt(moment().startOf('day')).sort('date');
    },
  },
  RootMutation: {
    addAgneda(root, { newAgenda }) {
      return Agenda.create({
        ...newAgenda,
      }).then(res => res);
    },
    updateAgenda(root, { agendaId, agendaData }) {
      return Agenda.findByIdAndUpdate(agendaId, {
        $set: {
          ...agendaData,
        },
      }).then(res => res);
    },
    addActivity(root, { agendaId, newActivity }) {
      return Agenda.findById(agendaId, (err, agenda) => {
        if (err) return null;

        agenda.activities.push(newActivity);
        return agenda.save((saveError, res) => res);
      });
    },
    updateActivity(root, { agendaId, activityId, activityData }) {
      return Agenda.findById(agendaId, (err, agenda) => {
        if (err) return null;

        const activity = agenda.activities.id(activityId);
        activity.set({ ...activityData });
        return agenda.save((saveError, res) => res);
      });
    },
    async sendNotification(root, { title, body, token }) {
      const payload = {
        notification: {
          title,
          body,
          sound: 'true',
        },
        data: {},
      };

      if (!token) {
        const tokens = await Device.find();
        _.forEach(tokens, (device) => {
          admin.messaging()
            .sendToDevice(device.token, payload);
        });
        return true;
      }

      admin.messaging()
        .sendToDevice(token, payload);

      return true;
    },
  },
};
