export default `

type Host {
  name: String
  title: String
  subtitle: String
}

type Activity {
  id: ID
  title: String
  description: String
  hosts: [Host]
  start_at: String
  end_at: String
}

type Location {
  name: String
  long: Float
  lat: Float
}

type Agenda {
  id: ID
  title: String
  date: String
  imageUrl: String
  location: Location
  activities: [Activity]
  active: Boolean
}

extend type RootQuery {
  agendas: [Agenda]
}

input HostInput {
  name: String!
  title: String
  subtitle: String
}

input ActivityInput {
  title: String!
  description: String!
  hosts: [HostInput]
  start_at: String!
  end_at: String!
}

input LocationInput {
  name: String!
  long: Float
  lat: Float
}

input UpdateActivityInput {
  title: String
  description: String
  hosts: [HostInput]
  start_at: String
  end_at: String
}

input AgendaInput {
  title: String!
  date: String!
  location: LocationInput!
  imageUrl: String
  activities: [ActivityInput]
  active: Boolean
}

input UpdateAgendaInput {
  title: String
  date: String
  location: LocationInput
  imageUrl: String
  active: Boolean
}

extend type RootMutation {
  addAgneda(newAgenda: AgendaInput!): Boolean
  addActivity(agendaId: ID! newActivity: ActivityInput!): Boolean
  updateAgenda(agendaId: ID! agendaData: UpdateAgendaInput!): Boolean
  updateActivity(agendaId: ID! activityId: ID! activityData: UpdateActivityInput!): Boolean
  sendNotification(title: String! body: String! token: String ): Boolean
}



`;
