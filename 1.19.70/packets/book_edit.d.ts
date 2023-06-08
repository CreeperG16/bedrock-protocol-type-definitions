import { u8, u8, u8, u8, u8 } from "../types";

export type book_edit = {
  slot: u8;
} & (
  | {
      type: "replace_page" | "add_page";
      page_number: u8;
      text: string;
      photo_name: string;
    }
  | {
      type: "delete_page";
      page_number: u8;
    }
  | {
      type: "swap_pages";
      page1: u8;
      page2: u8;
    }
  | {
      type: "sign";
      title: string;
      author: string;
      xuid: string;
    }
);
