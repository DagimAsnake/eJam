import express from 'express';
import cors from 'cors';
import { PORT } from './secret.js';
import rootRouter from './routes/index.js';
import { notFound, globalErrhandler } from './middlewares/globalErrHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// Main routes
app.use('/api', rootRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

app.listen(PORT || 8000, () => {
  console.log('Server is running on port', PORT);
});