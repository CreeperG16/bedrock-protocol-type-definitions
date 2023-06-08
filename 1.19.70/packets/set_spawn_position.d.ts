import { BlockCoordinates, zigzag32, BlockCoordinates } from "../types";

export type set_spawn_position = {
  spawn_type: "player" | "world";
  player_position: BlockCoordinates;
  dimension: zigzag32;
  world_position: BlockCoordinates;
};
