const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Storing config variables in dotenv
require('dotenv').config();
const cors = require('cors');

// CORS [START] >>
// Allow CORS to all.
// app.use(cors());

// Restrict CORS to few.
const allowedOrigins = process.env.allowedOrigins.split(',');
app.use(cors({
  origin: (origin, callback) => {
    // All if no origin, in case of mobile apps, curl requests, etc.
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const error = 'The CORS policy does not allow access from the specified origin.';
      return callback(new Error(error), false);
    }

    return callback(null, true);
  }
}));
// << CORS [END]

// Validation Rules
const validate = require('./validators/validate');

// Create application/json parser.
const jsonParser = bodyParser.json();
// Create application/x-www-form-urlencoded parser.
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app PORT
app.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));

const dbConnector = require('./models/connector');

// app Routes [START] >>
app.get('/games', jsonParser, (request, response) => {
  dbConnector.getGames(response);
});

app.post('/searchGames', jsonParser, (request, response) => {
  if (validate.isRequest(request, response)) return false;

  const validateData = ['game'];
  if (validate.isRequestValid(request, response, validateData)) return false;

  dbConnector.getGamesByName(request, response);
});

app.post('/platforms', jsonParser, (request, response) => {
  if (validate.isRequest(request, response)) return false;

  const validateData = ['gameId'];
  if (validate.isRequestValid(request, response, validateData)) return false;

  dbConnector.getPlatforms(request, response);
});

app.post('/topics', jsonParser, (request, response) => {
  if (validate.isRequest(request, response)) return false;

  const validateData = ['gameId', 'platformId'];
  if (validate.isRequestValid(request, response, validateData)) return false;

  dbConnector.getTopics(request, response);
});

app.use('/', (request, response) => response.send("Welcome to server!"));
// app Routes [END] >>
