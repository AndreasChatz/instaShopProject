import Landmark, { Field } from '../Landmark/index.js';

const fetchLandmarks = async req => {
  const { objectId } = req.params;

  const qLandmarks = new Parse.Query(Landmark);

  if (objectId) {
    return await qLandmarks
      .equalTo(Field.objectId, objectId)
      .first()
      .catch(() => {
        // NoOp
      });
  }

  return await qLandmarks
    .ascending(Field.order)
    .select([Field.shortInfo, Field.photoThumb, Field.photo])
    .find()
    .catch(() => {
      // NoOp
    });
};

export default fetchLandmarks;
