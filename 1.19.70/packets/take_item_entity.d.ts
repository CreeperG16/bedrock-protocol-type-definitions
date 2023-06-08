import { varint64, varint } from "../types";

export type take_item_entity = {
  runtime_entity_id: varint64;
  target: varint;
};
