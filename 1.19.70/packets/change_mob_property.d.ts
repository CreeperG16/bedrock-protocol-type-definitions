import { zigzag64, zigzag32, lf32 } from "../types";

export type change_mob_property = {
  entity_unique_id: zigzag64;
  property: string;
  bool_value: boolean;
  string_value: string;
  int_value: zigzag32;
  float_value: lf32;
};
