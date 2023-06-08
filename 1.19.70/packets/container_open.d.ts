import { WindowID, WindowType, BlockCoordinates, zigzag64 } from "../types";

export type container_open = {
  window_id: WindowID;
  window_type: WindowType;
  coordinates: BlockCoordinates;
  rutime_entity_id: zigzag64;
};
