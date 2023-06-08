import { lu64, u8 } from "../types";

export type entity_pick_request = {
  runtime_entity_id: lu64;
  selected_slot: u8;
  with_data: boolean;
};
