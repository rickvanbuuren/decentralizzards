const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env'});
// Default port set to 8080 but port 3000 specified in the env file
const PORT = process.env.PORT || 8080

// Log requests with morgan
app.use(morgan('tiny'));

// Mongodb connection
connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true}));

// Set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

// Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/fonts', express.static(path.resolve(__dirname, "assets/fonts")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// Load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); })