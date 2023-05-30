import Landmark, { Field } from '../Landmark/index.js';

const saveLandmark = async req => {
  const { user } = req;
  const { objectId, data: jsonData } = req.params;
  const sessionToken = user?.getSessionToken();

  if (!jsonData) {
    throw new Error('data field required.');
  }

  if (!objectId) {
    throw new Parse.Error(Parse.Error.MISSING_OBJECT_ID, 'objectId required.');
  }

  if (!sessionToken) {
    throw new Parse.Error(Parse.Error.SESSION_MISSING, 'User is not authenticated');
  }

  const landmark = Landmark.createWithoutData(objectId);
  const data = JSON.parse(jsonData);

  Object.entries(data).forEach(([key, value]) => {
    if (Object.prototype.hasOwnProperty.call(Field, key)) {
      landmark.set(key, value);
    }
  });

  return await landmark.save(null, { sessionToken }).catch(() => {
    // NoOp
  });
};

export default saveLandmark;
