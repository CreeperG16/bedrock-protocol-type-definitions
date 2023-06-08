import { SoundType, vec3f, zigzag32 } from "../types";

export type level_sound_event = {
  sound_id: SoundType;
  position: vec3f;
  extra_data: zigzag32;
  entity_type: string;
  is_baby_mob: boolean;
  is_global: boolean;
};
