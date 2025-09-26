import express from 'express';

const app = express();
const port = Number(process.env.port) || 3000;

app.get('/', (request, response) => {
  response.send('This is a TypeScript & Express.js server.');
});

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
