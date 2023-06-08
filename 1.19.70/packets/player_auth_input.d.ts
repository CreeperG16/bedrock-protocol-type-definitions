import {
  lf32,
  lf32,
  vec3f,
  vec2f,
  lf32,
  InputFlag,
  varint64,
  vec3f,
  TransactionLegacy,
  TransactionActions,
  TransactionUseItem,
  Action,
} from "../types";

export type player_auth_input = {
  pitch: lf32;
  yaw: lf32;
  position: vec3f;
  move_vector: vec2f;
  head_yaw: lf32;
  input_data: InputFlag;
  input_mode: "unknown" | "mouse" | "touch" | "game_pad" | "motion_controller";
  play_mode:
    | "normal"
    | "teaser"
    | "screen"
    | "viewer"
    | "reality"
    | "placement"
    | "living_room"
    | "exit_level"
    | "exit_level_living_room"
    | "num_modes";
  interaction_model: "touch" | "crosshair" | "classic";
  gaze_direction?: vec3f;
  tick: varint64;
  delta: vec3f;
  transaction?: {
    legacy: TransactionLegacy;
    actions: TransactionActions;
    data: TransactionUseItem;
  };
  item_stack_request?: ItemStackRequest;
  block_action?: {
    action: Action;
    position?: BlockCoordinates;
    face?: zigzag32;
  }[];
};
