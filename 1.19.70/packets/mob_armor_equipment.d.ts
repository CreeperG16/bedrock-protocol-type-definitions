import { varint64, Item, Item, Item, Item } from "../types";

export type mob_armor_equipment = {
  runtime_entity_id: varint64;
  helmet: Item;
  chestplate: Item;
  leggings: Item;
  boots: Item;
};
