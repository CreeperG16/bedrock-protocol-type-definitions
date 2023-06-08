import { varint, WindowID } from "../types";

export type player_hotbar = {
  selected_slot: varint;
  window_id: WindowID;
  select_slot: boolean;
};
