import { WindowID, WindowType, u8, zigzag64, nbt } from "../types";

export type update_equipment = {
  window_id: WindowID;
  window_type: WindowType;
  size: u8;
  entity_id: zigzag64;
  inventory: nbt;
};
