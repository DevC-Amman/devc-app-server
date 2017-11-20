export default `
type User {
  id: ID
  fbid: ID
  name: String
  email: String
  gender: String
}

input UserInput {
  fbid: ID
  name: String
  email: String
  gender: String
}

extend type RootMutation {
  addDevice(token: String! os: String! userId: ID): Boolean
  updateDevice(token: String! userId: ID): Boolean
  fbConnect(newUser: UserInput! deviceToken: String): User
}
`;
