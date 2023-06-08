import { varint64, Item, u8, u8, WindowID } from "../types";

export type mob_equipment = {
  runtime_entity_id: varint64;
  item: Item;
  slot: u8;
  selected_slot: u8;
  window_id: WindowID;
};
