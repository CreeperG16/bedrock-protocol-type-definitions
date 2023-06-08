import {
  zigzag64,
  varint64,
  GameMode,
  vec3f,
  vec2f,
  lu64,
  li16,
  zigzag32,
  GameMode,
  zigzag32,
  BlockCoordinates,
  zigzag32,
  zigzag32,
  lf32,
  lf32,
  varint,
  varint,
  GameRules,
  Experiments,
  PermissionLevel,
  li32,
  li32,
  li32,
  EducationSharedResourceURI,
  zigzag32,
  li64,
  zigzag32,
  BlockProperties,
  Itemstates,
  nbt,
  lu64,
  uuid,
} from "../types";

export type start_game = {
  entity_id: zigzag64;
  runtime_entity_id: varint64;
  player_gamemode: GameMode;
  player_position: vec3f;
  rotation: vec2f;
  seed: lu64;
  biome_type: li16;
  biome_name: string;
  dimension: "overworld" | "nether" | "end";
  generator: zigzag32;
  world_gamemode: GameMode;
  difficulty: zigzag32;
  spawn_position: BlockCoordinates;
  achievements_disabled: boolean;
  editor_world: boolean;
  day_cycle_stop_time: zigzag32;
  edu_offer: zigzag32;
  edu_features_enabled: boolean;
  edu_product_uuid: string;
  rain_level: lf32;
  lightning_level: lf32;
  has_confirmed_platform_locked_content: boolean;
  is_multiplayer: boolean;
  broadcast_to_lan: boolean;
  xbox_live_broadcast_mode: varint;
  platform_broadcast_mode: varint;
  enable_commands: boolean;
  is_texturepacks_required: boolean;
  gamerules: GameRules;
  experiments: Experiments;
  experiments_previously_used: boolean;
  bonus_chest: boolean;
  map_enabled: boolean;
  permission_level: PermissionLevel;
  server_chunk_tick_range: li32;
  has_locked_behavior_pack: boolean;
  has_locked_resource_pack: boolean;
  is_from_locked_world_template: boolean;
  msa_gamertags_only: boolean;
  is_from_world_template: boolean;
  is_world_template_option_locked: boolean;
  only_spawn_v1_villagers: boolean;
  persona_disabled: boolean;
  custom_skins_disabled: boolean;
  emote_chat_muted: boolean;
  game_version: string;
  limited_world_width: li32;
  limited_world_length: li32;
  is_new_nether: boolean;
  edu_resource_uri: EducationSharedResourceURI;
  experimental_gameplay_override: boolean;
  chat_restriction_level: "none" | "dropped" | "disabled";
  disable_player_interactions: boolean;
  level_id: string;
  world_name: string;
  premium_world_template_id: string;
  is_trial: boolean;
  movement_authority: "client" | "server" | "server_with_rewind";
  rewind_history_size: zigzag32;
  server_authoritative_block_breaking: boolean;
  current_tick: li64;
  enchantment_seed: zigzag32;
  block_properties: BlockProperties;
  itemstates: Itemstates;
  multiplayer_correlation_id: string;
  server_authoritative_inventory: boolean;
  engine: string;
  property_data: nbt;
  block_pallette_checksum: lu64;
  world_template_id: uuid;
  client_side_generation: boolean;
};
