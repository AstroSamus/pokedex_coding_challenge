# pokedex_coding_challenge

## Overview
This project is a fullstack Pokedex application that includes a backend (Node.js) and a frontend (React). The backend serves the API for managing Pokémon data, while the frontend allows users to interact with the Pokedex and manage their favorite Pokémon.

## Instructions

### Prerequisites
- Ensure you have **Node.js** installed on your system.

### Setting Up and Running the Backend
1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the backend server:
    ```bash
    npm run dev
    ```
   - **Note**: The first time you run this command, it will create a local database of Pokémon, which might take around one minute to complete. Please wait for it to finish before proceeding to the frontend setup.
   - The backend server will be running at: [http://localhost:3000](http://localhost:3000)

### Setting Up and Running the Frontend
1. Navigate to the frontend folder:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend app:
    ```bash
    npm run dev
    ```
   - The frontend app will be running at: [http://localhost:5173](http://localhost:5173)

### Database Information
- The project uses an embedded database that does not require MongoDB Atlas or any external database manager to run the app.

## Running the Test Suite
1. Go to the backend folder:
    ```bash
    cd backend
    ```
2. Run the test suite:
    ```bash
    npm run test
    ```

This will run the unit tests for the backend API endpoints.
