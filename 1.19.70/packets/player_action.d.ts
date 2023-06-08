import {
  varint64,
  Action,
  BlockCoordinates,
  BlockCoordinates,
  zigzag32,
} from "../types";

export type player_action = {
  runtime_entity_id: varint64;
  action: Action;
  position: BlockCoordinates;
  result_position: BlockCoordinates;
  face: zigzag32;
};
