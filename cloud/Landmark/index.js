export const Field = {
  objectId: 'objectId',
  order: 'order',
  photo: 'photo',
  photoThumb: 'photo_thumb',
  shortInfo: 'short_info',
  title: 'title',
};

export default class Landmark extends Parse.Object {
  constructor() {
    super('Landmark');
  }

  static Field = Field;
}

Parse.Object.registerSubclass('Landmark', Landmark);
