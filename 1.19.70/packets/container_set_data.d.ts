import { WindowID, zigzag32, zigzag32 } from "../types";

export type container_set_data = {
  window_id: WindowID;
  property: zigzag32;
  value: zigzag32;
};
