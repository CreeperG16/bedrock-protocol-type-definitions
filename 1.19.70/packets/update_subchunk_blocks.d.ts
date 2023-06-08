import {
  zigzag32,
  zigzag32,
  zigzag32,
  BlockUpdate,
  BlockUpdate,
} from "../types";

export type update_subchunk_blocks = {
  x: zigzag32;
  y: zigzag32;
  z: zigzag32;
  blocks: BlockUpdate[];
  extra: BlockUpdate[];
};
