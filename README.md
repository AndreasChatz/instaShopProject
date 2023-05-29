# Instructions to run the server

## Install depedencies

`npm ci`

## Run the server

Execute in the terminal `npm start` or `npm run watch`

## Access Parse Dashboard at

`http://localhost:5000/dashboard`

## Query the database

To execute cloud functions, use `insomnia` or other relative software (curl if you're fun of the command line).
e.g. `http://localhost:5000/parse/functions/fetchLandmarks`
you need to provide the `X-Parse-Application-Id`
To save landmarks you need to provide additionally the `x-parse-session-token`

# Notes

- Parse server provides the `/login` endpoint for users to log in. Currently, users can log in using two endpoints: `/login` and `parse/functions/login` (the cloud function).
  The latter only returns the user's `objectId` and the `sessionToken` as requested.

- To save implementation time and avoid using additional dependencies, I took the liberty of utilizing the built-in rate limiter of Parse server instead of creating a middleware.
  If necessary, I can employ `express-rate-limit` in conjunction with `Redis` to achieve the same outcome.

- For the `saveLandmark` cloud function, things were unclear. More information is required, but due to time pressure, I made some assumptions.
  I assumed that the admin provides a `data` object as a parameter with the changes they want to make to the document.
  Additionally I added a check to allow only the update of fields that already exist in the Landmark schema.
  If the implementation does not meet the acceptance criteria, please let me know.

- For the purpose of this assignment, I included the `Parse Dashboard` in the same server.
  However, in real life, the `Parse Dashboard` should be in a different repository and deployed separately.
