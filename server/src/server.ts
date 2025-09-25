import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import { initDB } from './database';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || 'https://your-netlify-app.netlify.app'
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/', routes);

// Global error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('💥 Server Error:', err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { details: err.message })
  });
});

// 404 handler - must be last
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Initialize database and start server
const startServer = async () => {
  try {
    await initDB();
    
    app.listen(PORT, () => {
      console.log('🚀 Quiz Server running on port', PORT);
      console.log('📊 Environment:', process.env.NODE_ENV || 'development');
      console.log('🔗 Health check: http://localhost:' + PORT + '/api/health');
      console.log('📋 Quiz API: http://localhost:' + PORT + '/api/quiz');
    });
  } catch (error) {
    console.error('❌ Failed to initialize database:', error);
    process.exit(1);
  }
};

startServer();

export default app;