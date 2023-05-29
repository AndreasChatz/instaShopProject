import fetchLandmarks from './fetchLandmarks.js';
import login from './login.js';
import saveLandmark from './saveLandmark.js';

Parse.Cloud.define('fetchLandmarks', fetchLandmarks);
Parse.Cloud.define('login', login);
Parse.Cloud.define('saveLandmark', saveLandmark);
