import { BlockCoordinates, varint, zigzag32, zigzag32 } from "../types";

export type network_chunk_publusher_update = {
  coordinates: BlockCoordinates;
  radius: varint;
  saved_chunks: { x: zigzag32; z: zigzag32 }[];
};
