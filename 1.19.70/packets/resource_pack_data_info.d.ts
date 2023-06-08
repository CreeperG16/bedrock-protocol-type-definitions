import { lu32, lu32, lu64, ByteArray } from "../types";

export type resource_pack_data_info = {
  pack_id: string;
  max_chunk_size: lu32;
  chunk_count: lu32;
  size: lu64;
  hash: ByteArray;
  is_premium: boolean;
  pack_type:
    | "addon"
    | "cached"
    | "copy_protected"
    | "behavior"
    | "persona_piece"
    | "resources"
    | "skins"
    | "world_template";
};
