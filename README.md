Introducing "Y" - Your Ultimate Chatting App!
-----

### Introduction

"Y" is a feature-packed and user-friendly chatting app that brings all your favorite communication platforms under one roof. It aims to streamline your chatting experience, enhance privacy, and foster meaningful connections in a secure environment.

### Tech Stack and Key Dependencies

- [ExpressJS](https://expressjs.com/) Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  

- [ReactJS](https://react.dev/) React is a JavaScript library for building user interfaces.

- [Socket.IO](https://socket.io/) Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

- [PostgreSQL](https://www.postgresql.org/) PostgreSQL, also known as Postgres, is a free and open-source relational database management system.

### Main Files: Project Structure

  ```sh
      y
      ├── client
      │   ├── public
      │   │   └── index.html
      │   ├── src
      │   │   ├── components
      │   │   │   ├── ChatWindow.js
      │   │   │   ├── Message.js
      │   │   ├── App.js
      │   │   ├── index.js
      │   │   └── ...
      │   ├── package.json
      ├── server
      │   ├── index.js
      │   ├── chat.js
      │   ├── package.json
      │   └── ...
      ├── package.json (Main project package.json)
      ├── README.md
      └── ...
  ```

### Installation and Local Setup

To get started with "Y" on your local machine, follow these simple steps:

#### Prerequisites
- Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).


#### Step 1: Clone the Repository
First, clone the repository to your local machine using Git:
```sh
git clone https://github.com/hatimalattas/y.git
cd y
```

#### Step 2: Install Dependencies
Install the necessary dependencies for both the client and the server.

- For the server:
```sh
cd server
npm install
```

- For the client:
```sh
cd ../client
npm install
```

#### Step 3: Start the Server
Navigate back to the server directory and start the server:
```sh
cd ../server
npm start
```
The server will start running on http://localhost:4000.

#### Step 4: Start the Client
Open a new terminal, navigate to the client directory, and start the React app:
```sh
cd ../client
npm start
```
The client will start and open in your default web browser, typically at http://localhost:3000.