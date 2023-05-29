// Important: always add new fields in the Field object
export const Field = {
  description: 'description',
  location: 'location',
  objectId: 'objectId',
  order: 'order',
  photo: 'photo',
  photoThumb: 'photo_thumb',
  shortInfo: 'short_info',
  title: 'title',
  url: 'url',
};

export default class Landmark extends Parse.Object {
  constructor() {
    super('Landmark');
  }

  static Field = Field;
}

Parse.Object.registerSubclass('Landmark', Landmark);
