import { generateRandomString } from "./utils.helper"
import { Team } from "../model/team.model"
import * as moment from "moment"

const GAME_ID_TEAM = 7

export function createTeam(params: {
  name: string
  host: string
  gameId: string
  date: moment.Moment
}): Team {
  return {
    id: generateRandomString(GAME_ID_TEAM),
    name: params.name,
    color: "#f56565",
    host: params.host,
    gameId: params.gameId,
    dateRegister: params.date,
  }
}