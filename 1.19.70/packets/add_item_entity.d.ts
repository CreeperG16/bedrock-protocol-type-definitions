import {
  zigzag64,
  varint64,
  Item,
  vec3f,
  vec3f,
  MetadataDictionary,
} from "../types";

export type add_item_entity = {
  entity_id_self: zigzag64;
  runtime_entity_id: varint64;
  item: Item;
  position: vec3f;
  velocity: vec3f;
  metadata: MetadataDictionary;
  is_from_fishing: boolean;
};
