import { zigzag32, vec3f } from "../types";

export type change_dimension = {
  dimension: zigzag32;
  position: vec3f;
  respawn: boolean;
};
