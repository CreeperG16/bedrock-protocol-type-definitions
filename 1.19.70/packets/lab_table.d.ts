import { vec3u, u8 } from "../types";

export type lab_table = {
  action_type: "combine" | "react";
  position: vec3u;
  reaction_type: u8;
};
