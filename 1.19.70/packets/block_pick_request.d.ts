import { zigzag32, zigzag32, zigzag32, u8 } from "../types";

export type block_pick_request = {
  x: zigzag32;
  y: zigzag32;
  z: zigzag32;
  add_user_data: boolean;
  selected_slot: u8;
};
