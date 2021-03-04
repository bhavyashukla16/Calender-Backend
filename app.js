require('dotenv').config();
const express = require('express');
const http = require('http');
const app = express();
const routes = require('./api/router');
const PORT = process.env.PORT || 3300;
const server = http.createServer(app);

app.use(express.json());
app.use('/api', routes);

server.listen(PORT, () => {
  console.log('Server up and running on ', PORT);
}); //  returns http object


