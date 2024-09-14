# Scoreboard API Service

## Overview

The Scoreboard API service is a backend application that provides functionality to handle user score updates and ensure the live updating of the scoreboard. The service manages user score submissions, validates the authenticity of requests, and updates the top 10 scoreboard.

### Features:

1. **Live Score Updates**: Real-time update of the top 10 users' scores.
2. **Secure Score Submission**: Prevent unauthorized score updates.
3. **Scalability**: Designed to handle a high volume of score submissions.
4. **Data Persistence**: Score data will be persisted in a database.

### Endpoints

#### 1. **POST /api/score/update**

- **Description**: This endpoint is triggered when a user completes an action to update their score.
- **Request**:
  - Headers:
    - `Authorization: Bearer <token>`
  - Body:
    ```json
    {
        "userId": "string", // Unique identifier of the user
        "score": "number"   // New score to be added
    }
    ```
- **Response**:
  - `200 OK`: Score successfully updated
  - `400 Bad Request`: Invalid or missing parameters
  - `401 Unauthorized`: Invalid or missing token
  - `500 Internal Server Error`: Server-side error

#### 2. **GET /api/score/top10**

- **Description**: Fetches the top 10 users by score, ordered in descending order.
- **Response**:
  - `200 OK`: Returns an array of top 10 users
    ```json
    [
        {
            "userId": "string",   // Unique identifier of the user
            "username": "string", // Display name of the user
            "score": "number"     // User's current score
        }
    ]
    ```

### 3. **Diagram of the flow of execution**
    ```markdown
    +-----------+       +---------------------+       +---------------------+       +--------------------------+
    |  Client   |  ---> | POST /update-score   |  ---> | Validate Token       |  ---> | Update Score in DB        |
    | Completes |       | (send score + token) |       | (Authentication)     |       | (Update score if valid)   |
    | Action    |       +---------------------+       +---------------------+       +--------------------------+
    +-----------+                                                     |
                                                                       |
                                                            +-------------------------+
                                                            | Push live update via     |
                                                            | WebSocket to all clients |
                                                           +-------------------------+
    end
### Key Components

#### 1. **Authentication & Authorization**

- Users must be authenticated using a JWT (JSON Web Token).
- The API server validates the token to ensure that the score update is genuine.

#### 2. **Rate Limiting**

- Implement rate limiting to prevent abuse by malicious users attempting to inflate their scores using bots or repeated calls.

#### 3. **Score Calculation Logic**

- Scores can only be incremented by a fixed amount, depending on the action completed by the user.
- Any request to increase the score beyond the authorized increment will be rejected.

#### 4. **Live Scoreboard Update (WebSockets)**

- WebSockets are used to push live score updates to connected clients.
- When a user’s score is updated, all connected clients will receive real-time updates.

#### 5. **Database Model**

- The user’s score is stored in a persistent database (e.g., PostgreSQL or MongoDB).
- The top 10 users are indexed for fast retrieval and sorting.

  Example User Model:
  ```json
  {
      "userId": "string",
      "username": "string",
      "score": "number",
      "lastUpdated": "timestamp"
  }
