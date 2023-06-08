import { varint, ItemLegacy } from "../types";

export type creative_content = {
  items: { entry_id: varint; item: ItemLegacy }[];
};
