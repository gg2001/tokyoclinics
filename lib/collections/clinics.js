Clinics = new Mongo.Collection('clinics');

Clinics.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});