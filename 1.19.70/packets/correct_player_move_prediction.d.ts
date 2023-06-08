import { vec3f, vec3f, varint64 } from "../types";

export type correct_player_move_prediction = {
  position: vec3f;
  delta: vec3f;
  on_ground: boolean;
  tick: varint64;
};
