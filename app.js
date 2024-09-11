const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server running on port ${port}');
});