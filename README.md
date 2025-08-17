
# Full-Stack Application Documentation

This document provides an overview of the full-stack application, detailing the architecture and the interaction between the frontend and backend components.

## Project Structure

The project is organized into two main directories:

-   `Client/`: Contains the frontend React application.
-   `Server/`: Contains the backend Node.js application.

A root `package.json` file uses `concurrently` to run both the client and server development servers with a single command.

## Backend

The backend is a Node.js application built with the Express framework and written in TypeScript.

-   **Framework**: Express.js
-   **Language**: TypeScript
-   **Database**: MySQL with Sequelize ORM
-   **Authentication**: JSON Web Tokens (JWT)

### How it Works

1.  **Server Initialization**: The main server file, `Server/src/index.tsx`, sets up the Express application, applies middleware (including CORS for cross-origin requests from the frontend), and connects to the MySQL database using Sequelize.

2.  **API Routes**: The application exposes several API endpoints to handle different functionalities:
    -   `/signup`: Registers a new user.
    -   `/login`: Authenticates a user and returns a JWT.
    -   `/create-product`: Allows the creation of new products.
    -   `/products`: Fetches a list of all products.

3.  **Authentication**: The `/login` route generates a JWT upon successful authentication. This token is then used to protect certain routes. The `Server/src/Middleware/authenticate.tsx` middleware verifies the token on protected routes to ensure that only authenticated users can access them.

## Frontend

The frontend is a single-page application (SPA) built with React.

-   **Framework**: React
-   **Build Tool**: Vite
-   **Routing**: React Router
-   **API Communication**: Axios

### How it Works

1.  **Application Setup**: The main entry point for the React application is `Client/src/main.tsx`. The root component, `Client/src/App.tsx`, sets up the application's routing using React Router.

2.  **API Interaction**: The frontend communicates with the backend API using the `axios` library. It makes requests to the backend for user authentication, data fetching, and other operations. For example, the `LoginPage.tsx` component sends a POST request to the `/login` endpoint to authenticate the user.

3.  **Authentication Handling**: After a user logs in, the frontend receives a JWT from the backend. This token is typically stored in the browser's local storage or a cookie and is sent with subsequent API requests in the authorization header to access protected backend resources.

## Frontend-Backend Connection

The frontend and backend are designed to work together as follows:

-   The frontend, running on `http://localhost:5173`, makes API calls to the backend, which runs on `http://localhost:3000`.
-   The backend's CORS policy is configured to allow requests from the frontend's origin.
-   The frontend handles the user interface and user interactions, while the backend manages business logic, database operations, and authentication.