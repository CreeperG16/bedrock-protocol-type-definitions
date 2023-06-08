import { u8, zigzag64, vec3f, ByteArray } from "../types";

export type spawn_particle_effect = {
  dimension: u8;
  entity_id: zigzag64;
  position: vec3f;
  particle_name: string;
  molang_variables: ByteArray;
};
