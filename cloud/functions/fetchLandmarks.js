import Landmark, { Field } from '../Landmark/index.js';
const fetchLandmarks = async req => {
  const { objectId } = req.params;

  const qLandmarks = new Parse.Query(Landmark);

  if (objectId) {
    return await qLandmarks.equalTo(Field.objectId, objectId).first();
  }

  return await qLandmarks
    .ascending(Field.order)
    .select([Field.shortInfo, Field.photoThumb, Field.photo])
    .find();
};

export default fetchLandmarks;
