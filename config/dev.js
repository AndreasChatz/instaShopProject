import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
  PARSE: {
    databaseURI: process.env.DB_URI || 'mongodb://localhost:27017/dev',
    cloud: path.resolve(path.resolve(), './cloud/main.js'),
    appId: process.env.APP_ID || 'myAppId',
    masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
    serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
    liveQuery: {
      classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
    },
    accountLockout: { duration: 15, threshold: 5 },
  },
  DASHBOARD: {
    apps: [
      {
        serverURL: process.env.SERVER_URL,
        appId: process.env.APP_ID || 'myAppId',
        masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
        appName: process.env.APP_NAME,
      },
    ],
  },
};
