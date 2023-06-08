import { zigzag32 } from "../types";

export type packet_violation_warning = {
  violation_type: "malformed";
  severity: "warning" | "final_warning" | "terminating";
  packet_id: zigzag32;
  reason: string;
};
