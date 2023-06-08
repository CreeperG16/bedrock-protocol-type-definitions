import { zigzag64, li32, zigzag64, zigzag64, li32 } from "../types";

export type set_score =
  | {
      action: "change";
      entries: ({
        scoreboard_id: zigzag64;
        objective_name: string;
        score: li32;
      } & (
        | {
            entry_type: "player" | "entity";
            entity_unique_id: zigzag64;
          }
        | {
            entry_type: "fake_player";
            custom_name: string;
          }
      ))[];
    }
  | {
      action: "remove";
      entries: {
        scoreboard_id: zigzag64;
        objective_name: string;
        score: li32;
      }[];
    };
