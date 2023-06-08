import {
  varint64,
  nbt,
  BlockCoordinates,
  BlockCoordinates,
  zigzag32,
} from "../types";

export type add_volume_entity = {
  runtime_id: varint64;
  nbt: nbt;
  encoding_identifier: string;
  instance_name: string;
  bounds: { min: BlockCoordinates; max: BlockCoordinates };
  dimension: zigzag32;
  engine_version: string;
};
