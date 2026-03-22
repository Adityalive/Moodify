# Moodify

Moodify is a full-stack music recommendation app that matches songs to a user's facial expression or selected mood. It combines a React frontend, an Express backend, face-expression detection with MediaPipe, and a music library stored with ImageKit.

Link :https://moodify-ou8b.onrender.com/
## Features

- Emotion-based song discovery using the webcam
- User authentication with JWT stored in HTTP-only cookies
- Mood-based playlist fetching
- Song upload support on the backend
- Protected home page for authenticated users
- Orange-and-black landing page for first-time visitors

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS 4
- Axios
- React Router
- MediaPipe Tasks Vision

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- Redis
- JWT authentication
- Multer
- ImageKit

## Project Structure

```text
Moodify/
├── Backend/
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   ├── controller/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
├── Frontend/
│   ├── package.json
│   ├── src/
│   │   ├── App.routes.jsx
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── Expression/
│   │   │   ├── shared/
│   │   │   └── Songs/
└── README.md
```

## How It Works

1. A user lands on the app, signs up, or logs in.
2. The protected home page opens the camera and runs face-expression detection.
3. The detected expression is used as a mood value.
4. The frontend requests matching songs from the backend.
5. The backend fetches songs for that mood from MongoDB and returns them to the playlist UI.

## API Overview

### Auth

- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/users/me`
- `POST /api/users/logout`

### Songs

- `POST /api/songs/uploadsong`
- `GET /api/songs/getsong?mood=<mood>`

## Environment Variables

Create a `.env` file inside `Backend/`.

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
secretkey=your_jwt_secret
RedisHost=your_redis_host
RedisPort=your_redis_port
RedisPassword=your_redis_password
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NODE_ENV=development
```

Create a `.env` file inside `Frontend/`.

```env
VITE_API_URL=http://localhost:3000
```

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/moodify.git
cd moodify
```

### 2. Install dependencies

```bash
cd Backend
npm install
```

```bash
cd Frontend
npm install
```

### 3. Start the backend

From the `Backend` folder:

```bash
node server.js
```

### 4. Start the frontend

From the `Frontend` folder:

```bash
npm run dev
```

## Frontend Scripts

Inside `Frontend/`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Notes

- The frontend expects the backend at `http://localhost:3000` unless `VITE_API_URL` is changed.
- Authentication uses cookies, so frontend and backend CORS settings must stay aligned.
- Webcam access is required for mood detection.
- Redis is used to blacklist tokens during logout.
- ImageKit is used when uploading song files and poster art extracted from ID3 tags.

## Future Improvements

- Add tests for frontend and backend
- Add song search and filtering
- Add admin upload dashboard
- Improve expression-to-mood mapping
- Add deployment instructions for Render or Vercel

## Author

Built as the Moodify project for mood-based music discovery.
