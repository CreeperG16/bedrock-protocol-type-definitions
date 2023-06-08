import { varint, varint, lu64, lu64 } from "../types";

export type client_cache_blob_status = {
  misses: varint;
  haves: varint;
  missing: lu64[];
  have: lu64[];
};
