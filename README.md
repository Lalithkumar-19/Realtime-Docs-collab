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

   ```bash
   git clone https://github.com/your-username/Realtime-Docs-collab.git
   cd Realtime-Docs-collab

