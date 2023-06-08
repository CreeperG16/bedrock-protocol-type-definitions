import { BlockCoordinates, lf32, lf32 } from "../types";

export type play_sound = {
  name: string;
  coordinates: BlockCoordinates;
  volume: lf32;
  pitch: lf32;
};
