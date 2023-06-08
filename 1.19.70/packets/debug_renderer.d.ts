import { vec3f, lf32, lf32, lf32, lf32, li64 } from "../types";

export type debug_renderer =
  | { type: "clear" }
  | {
      type: "add_cube";
      text: string;
      position: vec3f;
      red: lf32;
      green: lf32;
      blue: lf32;
      alpha: lf32;
      duration: li64;
    };
