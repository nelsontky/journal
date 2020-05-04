import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { ValidatedMethod } from "meteor/mdg:validated-method";

export const Entries = new Mongo.Collection("entries");

Entries.schema = new SimpleSchema({
  title: { type: String },
  writtenBy: { type: String },
  content: { type: String },
});

Entries.attachSchema(Entries.schema);

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("entries", () => Entries.find());
}

export const insert = new ValidatedMethod({
  name: "entries.insert",
  validate: new SimpleSchema({
    title: { type: String },
    writtenBy: { type: String },
    content: { type: String },
  }).validator({ clean: true }),

  run({ title, writtenBy, content }) {
    Entries.insert({
      title,
      writtenBy,
      content,
      date: new Date(),
    });
  },
});

export const remove = new ValidatedMethod({
  name: "entries.remove",
  validate: new SimpleSchema({
    id: { type: String },
  }).validator({ clean: true }),

  run({ id }) {
    Entries.remove(id);
  },
});
