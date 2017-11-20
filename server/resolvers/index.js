import _ from 'lodash';
import userResolvers from './user';
import agendaResolvers from './agenda';

const resolvers = _.merge(userResolvers, agendaResolvers);

export default resolvers;
