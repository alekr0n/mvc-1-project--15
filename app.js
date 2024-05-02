const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./Controllers/event');

app.set('view engine', 'ejs');

app.use('/', router);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
