import { Meteor } from 'meteor/meteor'
import { Games } from '../api/games'

Meteor.methods({
  insertGame(game) {
    Games.insert(game)
  }
})
