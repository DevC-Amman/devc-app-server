# DevC Application Server

This repository contains the server for [DevC mobile app](https://github.com/DevC-Amman/devc-app).

## Getting Started

These instructions will get the server up and running on your local machine for development and testing purposes, they also can be used to deploy the project on a live system.

### Prerequisites

To get the server running you need to have the following installed and setup on your machine:

* [Firebase](https://github.com/firebase/firebase-tools#installation)
* [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation and Setup

Clone this repository to your desired directory:

```
$ git clone https://github.com/DevC-Amman/devc-app-server
```

cd in to the devc-app-server directory and run the install script to install the dependencies:

```
$ npm install
// or
$ yarn install
```

Fill the empty `./server/firebase.json` file with your firebase configurations or replace it with your configurations file.


## Deployment

Now that the installation is finished you can start the server simply by running the start script:

```
$ npm start
// or
$ yarn start
```

To add new agendas and activities you should use graphiql to run the graphql mutations needed.

To run qraphiql, go to <http://127.0.0.1:4100/graphiql> on your local machine.  

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
