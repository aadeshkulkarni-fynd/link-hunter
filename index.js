const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/healthz', (req, res) => {
  res.send('Success response from the route');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));