import { vec3f, u8, varint64 } from "../types";

export type respawn = {
  position: vec3f;
  state: u8;
  runtime_entity_id: varint64;
};
