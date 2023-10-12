// Create web server
// 1. Load modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// 2. Setup the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 3. Setup the static assets directories
app.use(express.static(path.join(__dirname, 'public')));

// 4. Setup the body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// 5. Setup the routes
const comments = require('./routes/comments');
app.use('/comments', comments);

// 6. Start the server
app.listen(3000, () => {
  console.log('Server started at port 3000');
});