import { zigzag64, varint64, vec3f, zigzag32 } from "../types";

export type add_painting = {
  entity_id_self: zigzag64;
  runtime_entity_id: varint64;
  coordinates: vec3f;
  direction: zigzag32;
  title: string;
};
