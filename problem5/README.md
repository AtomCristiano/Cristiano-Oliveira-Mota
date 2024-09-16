# Basic CRUD Server

This is a simple **CRUD API server** built with **Express.js** and **TypeScript**. The server allows basic Create, Read, Update, and Delete (CRUD) operations for resources.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Adding, Updating, and Removing Resources](#adding-updating-and-removing-resources)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/crud-server.git
    cd crud-server
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Running the Application

### Development Mode

To run the server in development mode with automatic reload on changes, use:

```bash
npm run dev
```

### Production Mode

To run the server in production mode:

```bash
npm start
```

By default, the server will run at `http://localhost:3000`.

## API Endpoints

### 1. **Create a New Resource (POST)**
- **URL**: `/api/resources`
- **Method**: `POST`
- **Description**: Creates a new resource.
- **Request Body** (JSON):
  ```json
  {
    "name": "Sample Resource",
    "description": "This is a sample resource"
  }
  ```
- **Response**:
  - `201 Created`: Returns the newly created resource.
  ```json
  {
    "id": 1,
    "name": "Sample Resource",
    "description": "This is a sample resource"
  }
  ```

### 2. **Get All Resources (GET)**
- **URL**: `/api/resources`
- **Method**: `GET`
- **Description**: Retrieves a list of all resources.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Sample Resource",
      "description": "This is a sample resource"
    }
  ]
  ```

### 3. **Get a Resource by ID (GET)**
- **URL**: `/api/resources/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific resource by its ID.
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Sample Resource",
    "description": "This is a sample resource"
  }
  ```

### 4. **Update a Resource by ID (PUT)**
- **URL**: `/api/resources/:id`
- **Method**: `PUT`
- **Description**: Updates a specific resource by its ID.
- **Request Body** (JSON):
  ```json
  {
    "name": "Updated Resource",
    "description": "This is an updated resource"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Updated Resource",
    "description": "This is an updated resource"
  }
  ```

### 5. **Delete a Resource by ID (DELETE)**
- **URL**: `/api/resources/:id`
- **Method**: `DELETE`
- **Description**: Deletes a specific resource by its ID.
- **Response**:
  - `204 No Content`: The resource was deleted successfully.

## Adding, Updating, and Removing Resources

Here’s how you can interact with the API to add, update, and remove resources.

### 1. **Add a New Resource (POST)**

Use the following **POST** request to add a new resource:

```bash
curl -X POST http://localhost:3000/api/resources \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Resource",
    "description": "This is a new resource"
  }'
```

### 2. **Update an Existing Resource (PUT)**

To update an existing resource, use the following **PUT** request (replace `:id` with the actual resource ID):

```bash
curl -X PUT http://localhost:3000/api/resources/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Resource",
    "description": "This is an updated resource"
  }'
```

### 3. **Remove a Resource (DELETE)**

To delete an existing resource, use the following **DELETE** request (replace `:id` with the actual resource ID):

```bash
curl -X DELETE http://localhost:3000/api/resources/1
```

## Project Structure

```
/src
  ├── index.ts         # Main server entry point
  ├── routes.ts        # CRUD routes for resources
/README.md             # This file
/tsconfig.json         # TypeScript configuration
/package.json          # Project configuration and scripts
```

## Scripts

The following scripts are available in your `package.json`:

- **`npm run dev`**: Starts the server in development mode with `nodemon`.
- **`npm start`**: Starts the server in production mode.
- **`npm run build`**: Compiles TypeScript into JavaScript files in the `dist` folder.
- **`npm run lint`**: Runs linting for code quality.

---

## License

This project is licensed under the MIT License.
