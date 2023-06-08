import { varint64, vec3f } from "../types";

export type set_entity_motion = {
  runtime_entity_id: varint64;
  velocity: vec3f;
};
