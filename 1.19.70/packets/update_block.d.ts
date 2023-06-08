import { BlockCoordinates, varint, UpdateBlockFlags, varint } from "../types";

export type update_block = {
  position: BlockCoordinates;
  block_runtime_id: varint;
  flags: UpdateBlockFlags;
  layer: varint;
};
