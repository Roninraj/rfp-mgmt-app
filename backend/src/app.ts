import express from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();

// CORS setup
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// JSON middleware
app.use(express.json());

// Mount all routes
app.use(router);

export default app;
