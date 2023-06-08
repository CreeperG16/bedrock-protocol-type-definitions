import { ArmorDamageType } from "../types";

export type player_armor_damage = {
  type: ArmorDamageType;
  helmet_damage?: zigzag32;
  chestplate_damage?: zigzag32;
  leggings_damage?: zigzag32;
  boots_damage?: zigzag32;
};
