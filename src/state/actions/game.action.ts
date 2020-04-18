import { Action } from "./action"
import { Payload, PayloadId } from "../model/payload.model"

export class InitStateAction implements Action {
  payload: Payload
  constructor(payload: Payload) {
    this.payload = payload
  }
}

export class InitGameAction implements Action {}

export class StartGameAction implements Action {
  payload: PayloadId
  constructor(payload: PayloadId) {
    this.payload = payload
  }
}

export class FinishGameAction implements Action {
  payload: PayloadId
  constructor(payload: PayloadId) {
    this.payload = payload
  }
}

export class PauseGameAction implements Action {
  payload: PayloadId
  constructor(payload: PayloadId) {
    this.payload = payload
  }
}
