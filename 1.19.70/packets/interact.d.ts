import { varint64, vec3f } from "../types";

export type interact = {
  target_entity_id: varint64;
} & (
  | {
      action_id: "open_inventory";
    }
  | {
      action_id: "leave_vehicle" | "mouse_over_entity";
      position: vec3f;
    }
);
