import { BlockCoordinates, zigzag32 } from "../types";

export type block_event = {
  position: BlockCoordinates;
  type: "sound" | "change_state";
  data: zigzag32;
};
