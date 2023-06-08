import {
  varint,
  vec3f,
  lf32,
  lf32,
  lf32,
  varint,
  varint64,
  LegacyEntityType,
} from "../types";

export type move_player = {
  runtime_id: varint;
  position: vec3f;
  pitch: lf32;
  yaw: lf32;
  head_yaw: lf32;
  on_ground: boolean;
  ridden_runtime_id: varint;
  tick: varint64;
} & (
  | {
      mode: "teleport";
      teleport: {
        cause:
          | "unknown"
          | "projectile"
          | "chorus_fruit"
          | "command"
          | "behavior";
        source_entity_type: LegacyEntityType;
      };
    }
  | {
      mode: "normal" | "reset" | "rotation";
    }
);
