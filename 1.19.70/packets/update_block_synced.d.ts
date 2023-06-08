import {
  BlockCoordinates,
  varint,
  UpdateBlockFlags,
  varint,
  zigzag64,
} from "../types";

export type update_block_synced = {
  position: BlockCoordinates;
  block_runtime_id: varint;
  flags: UpdateBlockFlags;
  layer: varint;
  entity_unique_id: zigzag64;
  transition_type: "entity" | "create" | "destroy";
};
