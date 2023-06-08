import {
  zigzag32,
  vec3i,
  SubChunkEntryWithCaching,
  SubChunkEntryWithoutCaching,
} from "../types";

export type subchunk = { dimension: zigzag32; origin: vec3i } & (
  | { cache_enabled: true; entries: SubChunkEntryWithCaching }
  | { cache_enabled: false; entries: SubChunkEntryWithoutCaching }
);
