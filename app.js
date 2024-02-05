const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/version', (_req, res) => {
  res.send('1');
});

app.get('/health', (_req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    res.status(500).send('error...');
  }

  res.send('ok');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
