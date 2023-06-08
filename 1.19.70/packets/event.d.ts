import { varint64, u8, restBuffer } from "../types";

export type event = {
  runtime_id: varint64;
  event_type:
    | "achievement_awarded"
    | "entity_interact"
    | "portal_built"
    | "portal_used"
    | "mob_killed"
    | "cauldron_used"
    | "player_death"
    | "boss_killed"
    | "agent_command"
    | "agent_created"
    | "banner_pattern_removed"
    | "commaned_executed"
    | "fish_bucketed"
    | "mob_born"
    | "pet_died"
    | "cauldron_block_used"
    | "composter_block_used"
    | "bell_block_used"
    | "actor_definition"
    | "raid_update"
    | "player_movement_anomaly"
    | "player_moement_corrected"
    | "honey_harvested"
    | "target_block_hit"
    | "piglin_barter"
    | "waxed_or_unwaxed_copper";
  use_player_id: u8;
  event_data: restBuffer;
};
