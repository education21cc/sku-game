
export enum GameState {
  placingBoxes,
  pickingBoxes,
}

export type GameStateAction =
 | { type: 'startPicking' };

export const gameStateReducer = (state: GameState, action: GameStateAction ) => {
  console.log(state, action)
  switch (action.type) {
    case 'startPicking':
      return GameState.pickingBoxes;
    default:
      return state;
  }
}