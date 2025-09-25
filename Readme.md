# Quizerr - Full Stack Quiz Application

A modern quiz application built with React, TypeScript, Node.js, Express, and SQLite.

## Features

- 100 full-stack web development questions
- 5-minute quiz timer
- Randomized answer options to prevent patterns
- Detailed results showing correct/incorrect answers
- Responsive design with Tailwind CSS
- MVC architecture with TypeScript

## Local Development

### Prerequisites
- Node.js 18+ and npm

### Quick Start
1. Clone the repository
2. Set up the backend (see Backend Setup)
3. Set up the frontend (see Frontend Setup)
4. Both servers will run on different ports (backend: 5000, frontend: 5173)

### Backend Setup
```bash
cd server
npm install

# Initialize the database with questions
npm run seed

# Start the development server
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

## Database Setup & Seeding

The application uses SQLite database with a comprehensive seeding system.

### Database Seeder
The seeder is located in `server/src/seeders/fullStackQuestions.ts` and contains:
- 100 carefully curated full-stack web development questions
- Questions categorized by: HTML (20), CSS (20), JavaScript (20), React (15), Node.js (15), Database (10)
- Each question has 4 options with randomized order to prevent answer patterns

### Seeding Commands
```bash
cd server

# Seed the database with questions (first time setup)
npm run seed

# Reset database and re-seed (if you want to start fresh)
npm run reset-db
```

### Manual Database Management
The database file is created automatically at `server/database.db` when you run the seeder. If you need to inspect the database, you can use any SQLite browser or CLI tools.

## Deployment

### Deploying to Render

1. **Prepare your repository:**
   ```bash
   git add .
   git commit -m "Deploy to Render"
   git push origin main
   ```

2. **Backend Deployment (Render Web Service):**
   - Connect your GitHub repository
   - Set Build Command: `cd server && npm install && npm run build`
   - Set Start Command: `cd server && npm start`
   - Add Environment Variables:
     - `NODE_ENV=production`
     - `PORT` (automatically set by Render)

3. **Frontend Deployment (Render Static Site):**
   - Connect your GitHub repository
   - Set Build Command: `cd client && npm install && npm run build`
   - Set Publish Directory: `client/dist`

4. **Important Notes:**
   - The backend will automatically seed the database on first startup
   - Update the frontend's API base URL to point to your deployed backend
   - Ensure CORS is configured for your frontend domain

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── types/          # TypeScript type definitions
│   │   └── config/         # Configuration files
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── seeders/        # Database seeders
│   │   └── scripts/        # Utility scripts
│   └── package.json
│
└── README.md
```

## Technologies Used

### Frontend
- React 19 with TypeScript
- Vite (build tool)
- React Router DOM (routing)
- Tailwind CSS (styling)
- Lucide React (icons)

### Backend
- Node.js with Express
- TypeScript
- SQLite (database)
- CORS (cross-origin requests)

## API Endpoints

- `GET /api/quiz/questions` - Get 20 random quiz questions with shuffled options
- `POST /api/quiz/submit` - Submit quiz answers and get detailed results

### Example API Response
```json
{
  "questions": [
    {
      "id": 1,
      "question": "What does HTML stand for?",
      "options": ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Marking Language"],
      "category": "HTML"
    }
  ]
}
```

## Available Scripts

### Backend Scripts
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript to JavaScript
npm start           # Start production server
npm run seed        # Seed database with questions
npm run reset-db    # Reset and re-seed database
```

### Frontend Scripts
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

## Troubleshooting

### Common Issues

1. **Database not seeded:**
   ```bash
   cd server && npm run reset-db
   ```

2. **Port conflicts:**
   - Backend runs on port 5000
   - Frontend runs on port 5173
   - Change ports in respective config files if needed

3. **CORS errors:**
   - Ensure backend CORS is configured for your frontend URL
   - Check the API base URL in frontend configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.