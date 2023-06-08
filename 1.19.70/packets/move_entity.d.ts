import { varint64, u8, vec3f, Rotation } from "../types";

export type move_entity = {
  runtime_entity_id: varint64;
  flags: u8;
  position: vec3f;
  rotation: Rotation;
};
