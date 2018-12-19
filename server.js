const express   = require('express');
const app       = express();


const port = 5000;

require('./routes/helper')(app);
app.listen(port, () => `Server running on port ${port}`);