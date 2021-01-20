const app = require('express')();
require('dotenv').config();
require('./startup/routes')(app);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening to port ${port}`));
