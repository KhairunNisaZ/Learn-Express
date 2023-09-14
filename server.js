const express = require('express');
require("dotenv").config();

const app = express();

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./db/dbConnect');

app.use(express.json());
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

const PORT = 9090

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

