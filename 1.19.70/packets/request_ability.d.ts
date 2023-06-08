import { lf32 } from "../types";

export type request_ability = {
  ability:
    | "build"
    | "mine"
    | "doors_and_switches"
    | "open_containers"
    | "attack_players"
    | "attack_mobs"
    | "operator_commands"
    | "teleport"
    | "invulnerable"
    | "flying"
    | "may_fly"
    | "instant_build"
    | "lightning"
    | "fly_speed"
    | "walk_speed"
    | "muted"
    | "world_builder"
    | "no_clip"
    | "ability_count";
  value_type: "bool" | "float";
  bool_value: boolean;
  float_value: lf32;
};
