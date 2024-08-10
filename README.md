# Realtime-Docs-collab

A real-time collaborative document editing application built with Node.js, Socket.io, React.js (using Vite), and Quill.js. This app allows multiple users to edit a document simultaneously, with changes being reflected in real-time across all connected clients. Each document is assigned a unique URL, which can be shared with collaborators for easy access and modification.

## Features

- **Real-time Collaboration:** Multiple users can edit the same document, with changes reflected instantly for all users.
- **Unique Document URLs:** Each document is assigned a unique URL, allowing for easy sharing and access.
- **Rich Text Editing:** Integrated with Quill.js for a rich text editing experience.
- **Persistent Storage:** Documents are saved and can be accessed later by using their unique URLs.

## Tech Stack

- **Frontend:** React.js (with Vite), Quill.js
- **Backend:** Node.js, Express, Socket.io
- **Database:** MongoDB (for storing documents)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or Yarn (v1.22 or later)
- MongoDB (running locally or using a cloud service like MongoDB Atlas)

### Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/Lalithkumar-19/Realtime-Docs-collab.git
   cd Realtime-Docs-collab

   Install Dependencies
   ```
   

**Install dependencies for the backend:**

```
cd server
npm install
``` 

**Install dependencies for the frontend:**

```
cd ../client
npm install
```
# Running the Application
## 1. Start the Backend
Navigate to the server directory:

```
cd server
```
*** Create a .env file in the server directory with the following content:

MONGO_URL=<your-mongodb-connection-string>
## Start the Node.js server:

``` 
npm run dev
```
The backend server will start on port 3001 by default.

## 2. Start the Frontend
Navigate to the client directory:

``` 

cd ../client
```
Start the Vite development server:

``` 
npm run dev
```
The frontend server will start on port 5173 by default.

# Usage
Accessing the Application

Open your browser and go to http://localhost:5173. The homepage will load, and you can either create a new document or access an existing one by entering its unique URL.
Collaborating on a Document

Share the unique document URL with others. Multiple users can edit the document simultaneously, with changes being broadcasted in real-time.

# Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.

#License
This project is licensed under the MIT License - see the LICENSE file for details.


