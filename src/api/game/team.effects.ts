import { r, HttpError, HttpStatus } from "@marblejs/core"
import { map } from "rxjs/operators"
import Store from "../../state/store"
import { mapToGetParams } from "../helpers/api.helper"
import { Game } from "../../state/model/game.model"

export const listTeamAssociatedToGame$ = r.pipe(
  r.matchPath("/game/:gameId/team"),
  r.matchType("GET"),
  r.useEffect((req$) =>
    req$.pipe(
      map(mapToGetParams),
      map(({ gameId }) => {
        const game: Game = Store.getState().games[gameId]
        if (!game) {
          throw new HttpError(
            `Game ${gameId} does not exist`,
            HttpStatus.NOT_FOUND
          )
        }
        return Object.values(game.teams)
      }),
      map((teams) => ({
        body: teams,
      }))
    )
  )
)
