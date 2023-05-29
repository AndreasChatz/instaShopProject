import fetchLandmarks from './fetchLandmarks.js';
import login from './login.js';
import saveLandmark from './saveLandmark.js';

Parse.Cloud.define('fetchLandmarks', fetchLandmarks);
Parse.Cloud.define('login', login);
Parse.Cloud.define('saveLandmark', saveLandmark);

Parse.Cloud.define('hello', req => {
  req.log.info(req);
  return 'Hi';
});

Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});
