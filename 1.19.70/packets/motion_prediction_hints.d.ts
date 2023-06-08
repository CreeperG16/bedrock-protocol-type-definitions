import { varint64, vec3f } from "../types";

export type motion_prediction_hints = {
  entity_runtime_id: varint64;
  velocity: vec3f;
  on_ground: boolean;
};
