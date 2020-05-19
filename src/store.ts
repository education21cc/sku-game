import { initialWMSState, WMSData } from "reducers/wmsReducer";
import { generateInitialPickingLists, PickingList } from "reducers/pickingListsReducer";
import { initialWarehouseState, WarehouseState } from "reducers/warehouseReducer";
import { GameState } from "reducers/gameStateReducer";

export interface AppState {
  gameState: GameState,
  wms: WMSData[];
  pickingLists: PickingList[];
  warehouse: WarehouseState; // Where all the boxes are in the warehouse
}


export const initialState: AppState = {
  gameState: GameState.placingBoxes,
  wms: initialWMSState,
  pickingLists: generateInitialPickingLists(),
  warehouse: initialWarehouseState,
}
