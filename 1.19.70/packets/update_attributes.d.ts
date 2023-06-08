import { varint64, PlayerAttributes, varint64 } from "../types";

export type update_attributes = {
  runtime_entity_id: varint64;
  attributes: PlayerAttributes;
  tick: varint64;
};
