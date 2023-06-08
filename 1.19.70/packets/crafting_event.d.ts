import { WindowID, uuid, Item, Item } from "../types";

export type crafting_event = {
  window_id: WindowID;
  recipe_type: "inventory" | "crafting" | "workbench";
  recipe_id: uuid;
  input: Item[];
  result: Item[];
};
