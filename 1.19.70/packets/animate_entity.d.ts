import { li32, lf32, varint64 } from "../types";

export type animate_entity = {
  animation: string;
  next_state: string;
  stop_condition: string;
  stop_condition_version: li32;
  controller: string;
  blend_out_time: lf32;
  runtime_entity_ids: varint64[];
};
