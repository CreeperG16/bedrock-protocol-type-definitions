import { zigzag32, vec3i, u8, u8, u8 } from "../types";

export type subchunk_request = {
  dimension: zigzag32;
  origin: vec3i;
  requests: { dx: u8; dy: u8; dz: u8 }[];
};
