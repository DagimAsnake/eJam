const express = require('express');
const cors = require('cors');
const { PORT } = require('./secret');
const rootRouter = require('./routes/index');
const { notFound, globalErrhandler } = require('./middlewares/globalErrHandler');


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