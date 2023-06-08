import {
  varint64,
  MetadataDictionary,
  EntityProperties,
  varint64,
} from "../types";

export type set_entity_data = {
  runtime_entity_id: varint64;
  metadata: MetadataDictionary;
  properties: EntityProperties;
  tick: varint64;
};
