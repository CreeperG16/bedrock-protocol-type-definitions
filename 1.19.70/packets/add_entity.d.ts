import {
  zigzag64,
  varint64,
  vec3f,
  vec3f,
  lf32,
  lf32,
  lf32,
  lf32,
  EntityAttributes,
  MetadataDictionary,
  EntityProperties,
  Links,
} from "../types";

export type add_entity = {
  unique_id: zigzag64;
  runtime_id: varint64;
  entity_type: string;
  position: vec3f;
  velocity: vec3f;
  pitch: lf32;
  yaw: lf32;
  head_yaw: lf32;
  body_yaw: lf32;
  attributes: EntityAttributes;
  metadata: MetadataDictionary;
  properties: EntityProperties;
  links: Links;
};
