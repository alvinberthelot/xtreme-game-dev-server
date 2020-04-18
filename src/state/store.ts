import { State } from "./model/state.model"
import { createGame } from "./helpers/game.helper"
import { Action } from "./actions/action"
import {
  InitGameAction,
  StartGameAction,
  FinishGameAction,
  PauseGameAction,
} from "./actions/game.action"
import { InitStateAction } from "./actions/state.action"

export default class Store {
  private static instance: State

  static getState() {
    if (!Store.instance) {
      // Store.instance = {}
    }

    return Store.instance
  }

  static changeState(action: Action) {
    const state = Store.getState()

    switch (action.constructor) {
      case InitStateAction: {
        const { date } = (<InitStateAction>action).payload
        Store.instance = {
          dateInit: date,
          log: [action],
          games: {},
        }
        break
      }
      case InitGameAction: {
        const game = createGame()
        state.games[game.id] = game
        break
      }
      case StartGameAction: {
        const { id } = (<StartGameAction>action).payload
        const game = state.games[id]
        game.isStarted = true
        break
      }
      case FinishGameAction: {
        const { id } = (<FinishGameAction>action).payload
        const game = state.games[id]
        game.isFinished = true
        break
      }
      case PauseGameAction: {
        const { id } = (<PauseGameAction>action).payload
        const game = state.games[id]
        game.isPaused = !game.isPaused
        break
      }
      default: {
        console.warn("Action not found !")
      }
    }
  }
}
