import { WindowIDVarint, varint, Item } from "../types";

export type inventory_slot = {
  window_id: WindowIDVarint;
  slot: varint;
  item: Item;
};
