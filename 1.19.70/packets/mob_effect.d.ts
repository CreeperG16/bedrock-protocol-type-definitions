import { varint64, u8, zigzag32, zigzag32, zigzag32 } from "../types";

export type mob_effect = {
  runtime_entity_id: varint64;
  event_id: u8;
  effect_id: zigzag32;
  amplifier: zigzag32;
  particles: boolean;
  duration: zigzag32;
};
