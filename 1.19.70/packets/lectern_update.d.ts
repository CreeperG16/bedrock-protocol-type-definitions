import { u8, u8, vec3i } from "../types";

export type lectern_update = {
  page: u8;
  page_count: u8;
  position: vec3i;
  drop_book: boolean;
};
