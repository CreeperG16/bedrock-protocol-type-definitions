import { li16 } from "../types";

export type completed_using_item = {
  use_method_id: li16;
  use_method:
    | "equip_armor"
    | "eat"
    | "attack"
    | "consume"
    | "throw"
    | "shoot"
    | "place"
    | "fill_bottle"
    | "fill_bucket"
    | "pour_bucket"
    | "use_tool"
    | "interact"
    | "retrieved"
    | "dyed"
    | "traded";
};
