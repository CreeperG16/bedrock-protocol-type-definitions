import {
  zigzag64,
  UpdateMapFlags,
  u8,
  BlockCoordinates,
  zigzag64,
  u8,
  u8,
  TrackedObject,
  MapDecoration,
  u8,
  zigzag32,
  zigzag32,
  zigzag32,
  zigzag32,
  varint,
} from "../types";

export type clientbound_map_item_data = {
  map_id: zigzag64;
  update_flags: UpdateMapFlags;
  dimension: u8;
  locked: boolean;
  origin: BlockCoordinates;
} & ((
  | {
      update_flags: { initialisation: true };
      included_in: zigzag64[];
      scale: u8;
    }
  | { update_flags: { initialisation: false } }
) &
  (
    | {
        update_flags: { decoration: true };
        scale: u8;
        tracked: {
          objects: TrackedObject[];
          decorations: MapDecoration[];
        };
      }
    | { update_flags: { decoration: false } }
  ) &
  (
    | {
        update_flags: { texture: true };
        scale: u8;
        texture: {
          width: zigzag32;
          height: zigzag32;
          x_offset: zigzag32;
          y_offset: zigzag32;
          pixels: varint[];
        };
      }
    | { update_flags: { texture: false } }
  ));
