import { lf32, lf32, u8 } from "../types";

export type camera_shake = {
  intensity: lf32;
  duration: lf32;
  type: u8;
  action: "add" | "stop";
};
