import {
  varint64,
  DeltaMoveFlags,
  lf32,
  lf32,
  lf32,
  lf32,
  lf32,
  lf32,
} from "../types";

export type move_entity_delta = {
  runtime_entity_id: varint64;
  flags: DeltaMoveFlags;
} & ({ flags: { has_x: true }; x: lf32 } | { flags: { has_x: false } }) &
  ({ flags: { has_y: true }; y: lf32 } | { flags: { has_y: false } }) &
  ({ flags: { has_z: true }; z: lf32 } | { flags: { has_z: false } }) &
  (
    | { flags: { has_rot_x: true }; rot_x: lf32 }
    | { flags: { has_rot_x: false } }
  ) &
  (
    | { flags: { has_rot_y: true }; rot_y: lf32 }
    | { flags: { has_rot_y: false } }
  ) &
  (
    | { flags: { has_rot_z: true }; rot_z: lf32 }
    | { flags: { has_rot_z: false } }
  );
