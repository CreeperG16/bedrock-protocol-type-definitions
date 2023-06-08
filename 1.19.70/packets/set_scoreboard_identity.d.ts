import { zigzag64, zigzag64, zigzag64 } from "../types";

export type set_scoreboard_identity =
  | {
      action: "register_identity";
      entries: {
        scoreboard_id: zigzag64;
        entity_unique_id: zigzag64;
      }[];
    }
  | {
      action: "clear_identity";
      entries: {
        scoreboard_id: zigzag64;
      }[];
    };
