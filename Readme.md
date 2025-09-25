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

### Backend Setup
```bash
cd server
npm install
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

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

- `GET /api/quiz/questions` - Get 20 random quiz questions
- `POST /api/quiz/submit` - Submit quiz answers and get results

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.