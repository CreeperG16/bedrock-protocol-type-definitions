import { zigzag32, zigzag32, ByteArray, lu16, varint, lu64 } from "../types";

export type level_chunk = {
  x: zigzag32;
  z: zigzag32;
  payload: ByteArray;
} & (
  | {
      sub_chunk_count: -2;
      highest_subchunk_count: lu16;
    }
  | {
      sub_chunk_count: varint;
    }
) &
  (
    | {
        cache_enabled: true;
        blobs: { hashes: lu64[] };
      }
    | {
        cache_enabled: false;
      }
  );
