const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Kaixin is Alive!'));

app.listen(port, () => console.log(`Kaixin is listening to http://localhost:${port}`));