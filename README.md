# MERN Stack To-Do Application with Load Balancer

This is a full-stack to-do application built using the **MERN stack** (MongoDB, Express.js, React, Node.js), containerized with **Docker**, and configured with an **NGINX load balancer** to ensure smooth traffic distribution between backend services.

---

## Features

- **User Registration & Login**: Secure user authentication with MongoDB.
- **Task Management**: 
  - Add, update, delete, and retrieve tasks.
  - Tasks are sorted by their completion status.
- **Frontend**: Built using React with modern UI components.
- **Backend**: Node.js with Express.js, managing REST APIs.
- **Database**: MongoDB for reliable data storage.
- **Load Balancer**: NGINX for distributing traffic between multiple backend services.
- **Dockerized**: Each service runs in its own Docker container for seamless deployment.

---

## Project Architecture

### Services:
1. **Frontend**:
   - React app serving the user interface.
   - Exposed on port `3000`.

2. **Backend**:
   - Node.js application handling RESTful APIs.
   - Two backend instances (for load balancing), exposed internally on port `5000`.

3. **MongoDB**:
   - Database container storing application data.
   - Exposed internally on port `27017`.

4. **NGINX**:
   - Load balancer routing traffic to the backend instances.
   - Exposed on port `80`.

---

## Technologies Used

- **Frontend**: React, Axios, Bootstrap, SweetAlert2
- **Backend**: Node.js, Express.js, Mongoose, Nodemon
- **Database**: MongoDB
- **Load Balancer**: NGINX
- **Containerization**: Docker, Docker Compose

---

## Setup Instructions

### Prerequisites:
1. Install **Docker** and **Docker Compose** on your system.
2. Clone this repository.

### Steps:
1. Navigate to the project directory:
   ```bash
   cd todo
2. Start all services using Docker Compose:
   ```bash
   docker-compose up --build
3. if you want to stop all services using Docker Compose:
   ```bash
   docker-compose down

