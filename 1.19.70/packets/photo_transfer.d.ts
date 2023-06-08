import { u8, u8, li64 } from "../types";

export type photo_transfer = {
  image_name: string;
  image_data: string;
  book_id: string;
  photo_type: u8;
  source_type: u8;
  owner_entity_unique_id: li64;
  new_photo_name: string;
};
