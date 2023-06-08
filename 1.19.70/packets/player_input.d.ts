import { lf32, lf32 } from "../types";

export type player_input = {
  motion_x: lf32;
  motion_z: lf32;
  jumping: boolean;
  sneaking: boolean;
};
