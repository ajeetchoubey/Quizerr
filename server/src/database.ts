import sqlite3, { Database } from 'sqlite3';
import path from 'path';

const sqlite = sqlite3.verbose();

// Create database connection
export const db: Database = new sqlite.Database(path.join(__dirname, '../quiz.db'), (err: Error | null) => {
  if (err) {
    console.error('❌ Error opening database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

// Initialize database with simplified schema
export const initDB = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Questions table
    db.run(`
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question_text TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err: Error | null) => {
      if (err) {
        console.error('Error creating questions table:', err);
        reject(err);
        return;
      }

      // Options table
      db.run(`
        CREATE TABLE IF NOT EXISTS options (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          question_id INTEGER,
          option_text TEXT NOT NULL,
          is_correct BOOLEAN DEFAULT 0,
          FOREIGN KEY (question_id) REFERENCES questions (id) ON DELETE CASCADE
        )
      `, async (err: Error | null) => {
        if (err) {
          console.error('Error creating options table:', err);
          reject(err);
          return;
        }

        // Seed the database with questions
        try {
          const { seedDatabase } = await import('./seeders/fullStackQuestions');
          await seedDatabase();
          resolve();
        } catch (seedError) {
          console.error('Error seeding database:', seedError);
          reject(seedError);
        }
      });
    });
  });
};
