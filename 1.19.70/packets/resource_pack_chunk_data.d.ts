import { lu32, lu64, ByteArray } from "../types";

export type resource_pack_chunk_data = {
  pack_id: string;
  chunk_index: lu32;
  progress: lu64;
  payload: ByteArray;
};
