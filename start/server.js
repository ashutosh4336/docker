import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import cors from 'cors';
import fs from 'fs';

// Load ENV variable
dotenv.config({ path: './config/config.env' });

const app = express();

// MongoDB FIle Import
import connectDB from './config/db.js';
// MongoDB connected
connectDB();

app.use(express.json());

// Cors
app.use(cors());

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Static
const __dirname = path.resolve(path.dirname(''));
// __dirname = process.cwd();
console.log(__dirname);
// const nextDir = path.join(__dirname, 'app');

// fs.readdir(__dirname, (err, files) => {
//   err ? console.log(err) : files.forEach((el) => console.log(el));
// });

// __dirname = fs.realpathSync('.');
app.use(express.static(path.join(__dirname, 'backend', `public`)));

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Hello Docker' });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(
  PORT,
  console.log(
    `🚀 Started in Port ${process.env.PORT} on ${process.env.NODE_ENV} mode`
      .yellow.bold
  )
);

// Handle Unhandled Rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close Server and Exit
  server.close(() => process.exit(1));
});
