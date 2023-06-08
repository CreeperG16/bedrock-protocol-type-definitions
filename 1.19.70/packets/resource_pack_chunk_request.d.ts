import { lu32 } from "../types";

export type resource_pack_chunk_request = {
  pack_id: string;
  chunk_index: lu32;
};
