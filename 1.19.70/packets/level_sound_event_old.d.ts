import { u8, vec3f, zigzag32, zigzag32 } from "../types";

export type level_sound_event_old = {
  sound_id: u8;
  position: vec3f;
  block_id: zigzag32;
  entity_type: zigzag32;
  is_baby_mob: boolean;
  is_global: boolean;
};
