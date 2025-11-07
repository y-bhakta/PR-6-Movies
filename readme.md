# PR-6-Movies

A full-stack Node.js web application for managing and displaying movies, built with Express, MongoDB (Mongoose), EJS templating, and file upload support.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Usage](#usage)
- [Routes Overview](#routes-overview)
- [File Uploads](#file-uploads)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

- Movie CRUD (Create, Read, Update, Delete) operations
- Admin panel for managing movies
- Client-facing pages for browsing and viewing movies
- Image upload for movie posters
- EJS templating for dynamic HTML rendering
- MongoDB database integration
- Modular code structure with routers, controllers, and middleware

---

## Project Structure

```
.
├── configs/           # Configuration files (dotenv, db connection)
├── controllers/       # Route controllers (client & server)
├── middleware/        # Custom middleware (e.g., multer for uploads)
├── models/            # Mongoose models
├── public/            # Static assets (CSS, JS, images)
├── routers/           # Express routers (client & admin)
├── uploads/           # Uploaded images
├── views/             # EJS templates (client & admin)
├── index.js           # Main server entry point
├── package.json
└── readme.md
```

---

## Installation & Setup

1. **Clone the repository:**
	```sh
	git clone <repo-url>
	cd PR-6-Movies
	```

2. **Install dependencies:**
	```sh
	npm install
	```

3. **Set up environment variables:**
	- Create a `.env` file in the root directory with the following:
	  ```
	  PORT=3001
	  MONGODB_URI=mongodb://localhost:27017/moviesdb
	  ```

4. **Start the application:**
	- For production:
	  ```sh
	  npm start
	  ```
	- For development (with auto-reload):
	  ```sh
	  npm run dev
	  ```

---

## Environment Variables

- `PORT`: The port number the server will run on (default: 3001)
- `MONGODB_URI`: MongoDB connection string

---

## Scripts

- `npm start` — Start the server
- `npm run dev` — Start the server with nodemon for development

---

## Usage

- Visit `http://localhost:3001/` for the client interface.
- Visit `http://localhost:3001/server` for the admin panel.

---

## Routes Overview

### Client Routes

- `/` — Home page
- `/about` — About page
- `/contact` — Contact page
- `/joinus` — Join Us page
- `/review` — Movie reviews (list)
- `/single/:id` — Single movie details

### Admin (Server) Routes

- `/server` — Admin dashboard
- `/server/form-basic` — Add new movie (GET/POST)
- `/server/tables` — List all movies
- `/server/delete/movie/:id` — Delete a movie
- `/server/edit/movie/:id` — Edit movie (GET/POST)

---

## File Uploads

- Movie images are uploaded via the admin panel and stored in the `uploads/` directory.
- Multer middleware handles file uploads.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS
- Multer (file uploads)
- dotenv
- nodemon (development)

---

## License

This project is licensed under the ISC License.

---

Let me know if you want to add or customize any section!
