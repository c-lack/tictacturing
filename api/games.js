import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo'

export const Games = new Mongo.Collection('games')

Games.allow({
  insert() { return false },
  update() { return false },
  remove() { return false }
})

Games.deny({
  insert() { return true },
  update() { return true },
  remove() { return true }
})

const MovesSchema = new SimpleSchema({
  prevMove: {
    type: SimpleSchema.Integer,
    min: 0,
    max: 80
  },
  gameState: {type: Array},
  'gameState.$': {
    type: SimpleSchema.Integer,
    min: -1,
    max: 1
  },
  move: {
    type: SimpleSchema.Integer,
    min: 0,
    max: 80
  }
})

const GameSchema = new SimpleSchema({
  won: Boolean,
  moves: [MovesSchema]
})

Games.attachSchema(GameSchema)
