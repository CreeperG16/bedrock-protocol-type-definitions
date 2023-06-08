import { varint64, lf32 } from "../types";

export type animate = {
  runtime_entity_id: varint64;
} & (
  | {
      action_id: "row_right" | "row_left";
      boat_rowing_time: lf32;
    }
  | {
      action_id:
        | "none"
        | "swing_arm"
        | "unknown"
        | "wake_up"
        | "critical_hit"
        | "magic_critical_hit";
    }
);
