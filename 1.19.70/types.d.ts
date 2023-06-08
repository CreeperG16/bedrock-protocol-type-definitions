// aliases for types used by protodef, in JS they are
// mostly numbers with no difference between byte/short/int etc
// Haven't checked if they're correct yet
export type varint = number;
export type lu16 = number;
export type li16 = number;
export type u8 = number;
export type i8 = number;
export type i32 = number;
export type lu32 = number;
export type li32 = number;
export type lu64 = number;
export type li64 = number;
export type lf32 = number;

export type varint64 = bigint;
export type zigzag32 = bigint;
export type zigzag64 = bigint;
export type uuid = string;
export type byterot = number;
export type bitflags = any;
export type restBuffer = Buffer;
export type encapsulated = any;
export type nbt = { type: string; value: { [key: string]: nbt } | nbt[] };
export type lnbt = nbt;
export type nbtLoop = nbt;
export type enum_size_based_on_values_len = number;
export type MapInfo = any;

// Actual types
export type BehaviourPackInfos = {
  uuid: string;
  version: string;
  size: lu64;
  content_key: string;
  sub_pack_name: string;
  content_identity: string;
  has_scripts: boolean;
}[];
export type TexturePackInfos = {
  uuid: string;
  version: string;
  size: lu64;
  content_key: string;
  sub_pack_name: string;
  content_identity: string;
  has_scripts: boolean;
  rtx_enabled: boolean;
}[];
export type ResourcePackIdVersions = { uuid: string; version: string; name: string }[];
export type ResourcePackIds = string[];
export type Experiment = { name: string; enabled: boolean };
export type Experiments = Experiment[];
export type GameMode =
  | "survival"
  | "creative"
  | "adventure"
  | "survival_spectator"
  | "creative_spectator"
  | "fallback"
  | "spectator";
export type GameRule = {
  name: string;
  editable: boolean;
} & (
  | {
      type: "bool";
      value: boolean;
    }
  | {
      type: "int";
      value: zigzag32;
    }
  | {
      type: "float";
      value: lf32;
    }
);
export type GameRules = GameRule[];
export type Blob = { hash: lu64; payload: ByteArray };
export type BlockProperties = { name: string; state: nbt }[];
export type Itemstates = { name: string; runtime_id: li16; component_based: boolean }[];
export type ItemExtraDataWithBlockingTick = {
  can_place_on: string[];
  can_destroy: string[];
  blocking_tick: li64;
} & (
  | {
      has_nbt: true;
      nbt: {
        version: u8;
        nbt: lnbt;
      };
    }
  | { has_nbt: false }
);
export type ItemExtraDataWithoutBlockingTick = {
  can_place_on: string[];
  can_destroy: string[];
} & (
  | {
      has_nbt: true;
      nbt: {
        version: u8;
        nbt: lnbt;
      };
    }
  | { has_nbt: false }
);
export type ItemLegacy =
  | {
      network_id: 0;
    }
  | {
      network_id: zigzag32;
      count: lu16;
      metadata: varint;
      block_runtime_id: zigzag32;
      extra: ItemExtraDataWithoutBlockingTick | ItemExtraDataWithBlockingTick;
    };
export type Item =
  | {
      network_id: 0;
    }
  | ({
      network_id: zigzag32;
      count: lu16;
      metadata: varint;
      block_runtime_id: zigzag32;
      extra: ItemExtraDataWithoutBlockingTick | ItemExtraDataWithBlockingTick;
    } & ({ has_stack_id: 0 } | { has_stack_id: 1; stack_id: zigzag32 }));
export type vec3i = { x: zigzag32; y: zigzag32; z: zigzag32 };
export type vec3u = { x: varint; y: varint; z: varint };
export type vec3f = { x: lf32; y: lf32; z: lf32 };
export type vec2f = { x: lf32; z: lf32 };

export type MetadataDictionary = ((
  | {
      key:
        | "health" //int (minecart/boat)
        | "variant" //int
        | "color" //byte
        | "nametag" //string
        | "owner_eid" //long
        | "target_eid" //long
        | "air" //short
        | "potion_color" //int (ARGB!)
        | "potion_ambient" //byte
        | "jump_duration" //long
        | "hurt_time" //int (minecart/boat)
        | "hurt_direction" //int (minecart/boat)
        | "paddle_time_left" //float
        | "paddle_time_right" //float
        | "experience_value" //int (xp orb)
        | "minecart_display_block" //int (id | (data << 16))
        | "minecart_display_offset" //int
        | "minecart_has_display" //byte (must be 1 for minecart to show block inside)
        | "old_swell"
        | "swell_dir"
        | "charge_amount"
        | "enderman_held_runtime_id" //short
        | "entity_age" //short
        | "player_flags"
        | "player_index"
        | "player_bed_position" //block coords
        | "fireball_power_x" //float
        | "fireball_power_y"
        | "fireball_power_z"
        | "aux_power"
        | "fish_x"
        | "fish_z"
        | "fish_angle"
        | "potion_aux_value" //short
        | "lead_holder_eid" //long
        | "scale"
        | "interactive_tag" //string
        | "npc_skin_id" //string
        | "url_tag" //string
        | "max_airdata_max_air"
        | "mark_variant" //int
        | "container_type" //byte
        | "container_base_size" //int
        | "container_extra_slots_per_strength" //int
        | "block_target"
        | "wither_invulnerable_ticks" //int
        | "wither_target_1" //long
        | "wither_target_2" //long
        | "wither_target_3" //long
        | "aerial_attack"
        | "boundingbox_width"
        | "boundingbox_height"
        | "fuse_length"
        | "rider_seat_position" //vector3f
        | "rider_rotation_locked" //byte
        | "rider_max_rotation" //float
        | "rider_min_rotation" //float
        | "rider_rotation_offset"
        | "area_effect_cloud_radius" //float
        | "area_effect_cloud_waiting" //int
        | "area_effect_cloud_particle_id" //int
        | "shulker_peek_id" //int
        | "shulker_attach_face" //byte
        | "shulker_attached" //short
        | "shulker_attach_pos"
        | "trading_player_eid" //long
        | "trading_career"
        | "has_command_block"
        | "command_block_command" //string
        | "command_block_last_output" //string
        | "command_block_track_output" //byte
        | "controlling_rider_seat_number" //byte
        | "strength" //int
        | "max_strength" //int
        | "spell_casting_color" //int
        | "limited_life"
        | "armor_stand_pose_index" // int
        | "ender_crystal_time_offset" // int
        | "always_show_nametag" // byte
        | "color_2" // byte
        | "name_author"
        | "score_tag" //String
        | "balloon_attached_entity" // long
        | "pufferfish_size"
        | "bubble_time"
        | "agent"
        | "sitting_amount"
        | "sitting_amount_previous"
        | "eating_counter"
        | "flags_extended"
        | "laying_amount"
        | "laying_amount_previous"
        | "duration"
        | "spawn_time"
        | "change_rate"
        | "change_on_pickup"
        | "pickup_count"
        | "interact_text"
        | "trade_tier"
        | "max_trade_tier"
        | "trade_experience"
        | "skin_id"
        | "spawning_frames"
        | "command_block_tick_delay"
        | "command_block_execute_on_first_tick"
        | "ambient_sound_interval"
        | "ambient_sound_interval_range"
        | "ambient_sound_event_name"
        | "fall_damage_multiplier"
        | "name_raw_text"
        | "can_ride_target"
        | "low_tier_cured_discount"
        | "high_tier_cured_discount"
        | "nearby_cured_discount"
        | "nearby_cured_discount_timestamp"
        | "hitbox"
        | "is_buoyant"
        | "base_runtime_id"
        | "freezing_effect_strength"
        | "buoyancy_data"
        | "goat_horn_count"
        | "update_properties"
        | "movement_sound_distance_offset"
        | "heartbeat_interval_ticks"
        | "heartbeat_sound_event";
    }
  | {
      key: "flags";
      value: MetadataFlags1;
    }
  | {
      key: "flags_extended";
      value: MetadataFlags2;
    }
) &
  (
    | {
        type: "byte";
        value: i8;
      }
    | {
        type: "short";
        value: li16;
      }
    | {
        type: "int";
        value: zigzag32;
      }
    | {
        type: "float";
        value: lf32;
      }
    | {
        type: "string";
        value: string;
      }
    | {
        type: "compound";
        value: nbt;
      }
    | {
        type: "vec3i";
        value: vec3i;
      }
    | {
        type: "long";
        value: zigzag64;
      }
    | {
        type: "vec3f";
        value: vec3f;
      }
  ))[];

export type Link = {
  ridden_entity_id: zigzag64;
  rider_entity_id: zigzag64;
  type: u8;
  immediate: boolean;
  rider_initiated: boolean;
};
export type Links = Link[];
export type EntityAttributes = { name: string; min: lf32; value: lf32; max: lf32 }[];
export type EntityProperties = {
  ints: { index: varint; value: zigzag32 }[];
  floats: { index: varint; value: lf32 }[];
};
export type Rotation = { yaw: byterot; pitch: byterot; head_yaw: byterot };
export type BlockCoordinates = { x: zigzag32; y: varint; z: zigzag32 };
export type PlayerAttributes = {
  min: lf32;
  max: lf32;
  current: lf32;
  default: lf32;
  name: string;
  modifiers: {
    id: string;
    name: string;
    amount: lf32;
    operation: li32;
    operand: li32;
    serializable: boolean;
  }[];
}[];
export type TransactionUseItem = {
  action_type: "click_block" | "click_air" | "break_block";
  block_position: vec3i;
  face: varint;
  hotbar_slot: varint;
  held_item: Item;
  player_pos: vec3f;
  click_pos: vec3f;
  block_runtime_id: varint;
};
export type TransactionActions = ({
  slot: varint;
  old_item: Item;
  new_item: Item;
} & (
  | {
      source_type: "container";
      inventory_id: WindowIDVarint;
    }
  | {
      source_type: "craft" | "craft_slot";
      action: varint;
    }
  | {
      source_type: "world_interaction";
      flags: varint;
    }
  | {
      source_type: "global" | "creative";
    }
))[];
export type TransactionLegacy =
  | {
      legacy_request_id: 0;
    }
  | {
      legacy_request_id: zigzag32;
      legacy_transactions: {
        countType: varint;
        type: {
          container_id: u8;
          changed_slots: { slot_id: u8 }[];
        };
      }[];
    };
export type Transaction = {
  legacy: TransactionLegacy;
  actions: TransactionActions;
} & (
  | {
      transaction_type: "normal" | "inventory_mismatch";
    }
  | {
      transaction_type: "item_use";
      transaction_data: TransactionUseItem;
    }
  | {
      transaction_type: "item_use_on_entity";
      transaction_data: {
        entity_runtime_id: varint64;
        action_type: "interact" | "attack";
        hotbar_slot: zigzag32;
        held_item: Item;
        player_pos: vec3f;
        click_pos: vec3f;
      };
    }
  | {
      transaction_type: "item_release";
      transaction_data: {
        action_type: "release" | "consume";
        hotbar_slot: zigzag32;
        held_item: Item;
        head_pos: vec3f;
      };
    }
);
export type ItemStacks = Item[];
export type RecipeIngredient = {
  count: zigzag32;
} & (
  | {
      type: "int_id_meta";
      network_id: 0;
    }
  | {
      type: "int_id_meta";
      network_id: li16;
      metadata: li16;
    }
  | {
      type: "molang";
      expression: string;
      version: u8;
    }
  | {
      type: "item_tag";
      tag: string;
    }
  | {
      type: "string_id_meta";
      name: string;
      metadata: li16;
    }
  | {
      type: "invalid";
    }
);
export type PotionTypeRecipes = {
  input_item_id: zigzag32;
  input_item_meta: zigzag32;
  ingredient_id: zigzag32;
  ingredient_meta: zigzag32;
  output_item_id: zigzag32;
  output_item_meta: zigzag32;
}[];
export type PotionContainerChangeRecipes = {
  input_item_id: zigzag32;
  ingredient_id: zigzag32;
  output_item_id: zigzag32;
}[];
export type Recipes = (
  | {
      type: "shapeless" | "shulker_box" | "shapeless_chemistry";
      recipe: {
        recipe_id: string;
        input: RecipeIngredient[];
        output: ItemLegacy[];
        uuid: uuid;
        block: string;
        priority: zigzag32;
        network_id: varint;
      };
    }
  | {
      type: "shaped" | "shaped_chemistry";
      recipe: {
        recipe_id: string;
        width: zigzag32;
        height: zigzag32;
        input: RecipeIngredient[][];
        output: ItemLegacy[];
        uuid: uuid;
        block: string;
        priority: zigzag32;
        network_id: varint;
      };
    }
  | {
      type: "furnace";
      recipe: { input_id: zigzag32; output: ItemLegacy; block: string };
    }
  | {
      type: "furnace_with_metadata";
      recipe: { input_id: zigzag32; input_meta: zigzag32; output: ItemLegacy; block: string };
    }
  | {
      type: "multi";
      recipe: {
        uuid: uuid;
        network_id: varint;
      };
    }
  | {
      type: "smithing_transform";
      recipe: {
        recipe_id: string;
        base: RecipeIngredient;
        addition: RecipeIngredient;
        result: ItemLegacy;
        tag: string;
        network_id: varint;
      };
    }
)[];
export type SkinImage = { width: li32; height: li32; data: Buffer };
export type Skin = {
  skin_id: string;
  play_fab_id: string;
  skin_resource_pack: string;
  skin_data: SkinImage;
  animations: {
    skin_image: SkinImage;
    animation_type: li32;
    animation_frames: lf32;
    expression_type: lf32;
  }[];
  cape_data: SkinImage;
  geometry_data: string;
  geometry_data_version: string;
  animation_data: string;
  cape_id: string;
  full_skin_id: string;
  arm_size: string;
  skin_color: string;
  personal_pieces: {
    piece_id: string;
    piece_type: string;
    pack_id: string;
    is_default_piece: boolean;
    product_id: string;
  }[];
  piece_tint_colors: {
    piece_type: string;
    colors: string[];
  }[];
  premium: boolean;
  persona: boolean;
  cape_on_classic: boolean;
  primary_user: boolean;
};
export type PlayerRecords = {
  records_count: varint;
} & (
  | {
      type: "add";
      records: {
        uuid: uuid;
        entity_unique_id: zigzag64;
        username: string;
        xbox_user_id: string;
        platform_chat_id: string;
        build_platform: li32;
        skin_data: Skin;
        is_teacher: boolean;
        is_host: boolean;
      }[];
      verified: boolean[];
    }
  | {
      type: "remove";
      records: { uuid: uuid }[];
    }
);
export type Enchant = { id: Uint8Array; level: u8 };
export type EnchantOption = {
  cost: varint;
  slot_flags: li32;
  equip_enchants: Enchant[];
  held_enchants: Enchant[];
  self_enchants: Enchant[];
  name: string;
  option_id: zigzag32;
};
export type Action =
  | "start_break"
  | "abort_break"
  | "stop_break"
  | "get_updated_block"
  | "drop_item"
  | "start_sleeping"
  | "stop_sleeping"
  | "respawn"
  | "jump"
  | "start_sprint"
  | "stop_sprint"
  | "start_sneak"
  | "stop_sneak"
  | "creative_player_destroy_block"
  | "dimension_change_ack"
  | "start_glide"
  | "stop_glide"
  | "build_denied"
  | "crack_break"
  | "change_skin"
  | "set_enchatnment_seed"
  | "swimming"
  | "stop_swimming"
  | "start_spin_attack"
  | "stop_spin_attack"
  | "interact_block"
  | "predict_break"
  | "continue_break"
  | "start_item_use_on"
  | "stop_item_use_on"
  | "handled_teleport";
export type StackRequestSlotInfo = { slot_type: ContainerSlotType; slot: u8; stack_id: zigzag32 };
export type ItemStackRequest = {
  request_id: varint;
  // actions: {
  //   type_id:
  //     | "take"
  //     | "place"
  //     | "swap"
  //     | "drop"
  //     | "destroy"
  //     | "consume"
  //     | "create"
  //     | "place_in_container"
  //     | "take_out_container"
  //     | "lab_table_combine"
  //     | "beacon_payment"
  //     | "mine_block"
  //     | "craft_recipe"
  //     | "craft_recipe_auto"
  //     | "craft_creative"
  //     | "optional"
  //     | "craft_grindstone_request"
  //     | "craft_loom_request"
  //     | "non_implemented"
  //     | "results_deprecated";
  // }[];
  actions:
    | {
        type_id: "take" | "place";
        count: u8;
        source: StackRequestSlotInfo;
        destination: StackRequestSlotInfo;
      }
    | {
        type_id: "swap";
        source: StackRequestSlotInfo;
        destination: StackRequestSlotInfo;
      }
    | {
        type_id: "drop";
        source: StackRequestSlotInfo;
        randomly: boolean;
      }
    | {
        type_id: "destroy" | "consume";
        count: u8;
        source: StackRequestSlotInfo;
      }
    | {
        type_id: "create";
        result_slot_id: u8;
      }
    | {
        type_id: "beacon_payment";
        primary_effect: zigzag32;
        secondary_effect: zigzag32;
      }
    | {
        type_id: "mine_block";
        unknown1: zigzag32;
        predicted_durability: zigzag32;
        network_id: zigzag32;
      }
    | {
        type_id: "craft_recipe" | "craft_recipe_auto";
        recipe_network_id: varint;
      }
    | {
        type_id: "craft_creative";
        item_id: varint;
      }
    | {
        type_id: "optional";
        recipe_network_id: varint;
        filtered_string_index: li32;
      }
    | {
        type_id: "craft_grindstone_request";
        recipe_network_id: varint;
        cost: varint;
      }
    | {
        type_id: "craft_loom_request";
        pattern: string;
      }
    | {
        type_id: "non_implemented" | "place_in_container" | "take_out_container" | "lab_table_combine" | "mine_block";
      }
    | {
        type_id: "results_deprecated";
        result_items: ItemLegacy[];
        times_crafted: u8;
      };
  custom_names: string[];
  cause:
    | "chat_public"
    | "chat_whisper"
    | "sign_text"
    | "anvil_text"
    | "book_and_quill_text"
    | "command_block_text"
    | "block_actor_data_text"
    | "join_event_text"
    | "leave_event_text"
    | "slash_command_chat"
    | "cartography_text"
    | "slash_command_non_chat"
    | "scoreboard_text"
    | "ticking_area_text";
};
export type ItemStackResponses = ({
  request_id: varint;
} & (
  | {
      status: "ok";
      containers: {
        slot_type: ContainerSlotType;
        slots: {
          slot: u8;
          hotbar_slot: u8;
          count: u8;
          item_stack_id: varint;
          custom_name: string;
          durability_correction: zigzag32;
        }[];
      }[];
    }
  | {
      status: "error";
    }
))[];
export type ItemComponentList = { name: string; nbt: nbt }[];
export type CommandOrigin = {
  uuid: uuid;
  request_id: string;
} & (
  | {
      type: "dev_console" | "test";
      player_entity_id: { player_entity_id: zigzag64 };
    }
  | {
      type:
        | "player"
        | "block"
        | "minecart_block"
        | "automation_player"
        | "client_automation"
        | "dedicated_server"
        | "entity"
        | "virtual"
        | "game_argument"
        | "entity_server"
        | "precompiled"
        | "game_director_entity_server"
        | "script"
        | "executor";
    }
);
export type TrackedObject =
  | {
      type: "entity";
      entity_unique_id: zigzag64;
    }
  | {
      type: "block";
      block_position: BlockCoordinates;
    };
export type MapDecoration = {
  type: u8;
  rotation: u8;
  x: u8;
  y: u8;
  label: string;
  color_abgr: varint;
};
export type StructureBlockSettings = {
  palette_name: string;
  ignore_entities: boolean;
  ignore_blocks: boolean;
  non_ticking_players_and_ticking_areas: boolean;
  size: BlockCoordinates;
  structure_offset: BlockCoordinates;
  last_editing_player_unique_id: zigzag64;
  rotation: "none" | "90_deg" | "180_deg" | "270_deg";
  mirror: "none" | "x_axis" | "z_axis" | "both_axes";
  animation_mode: "none" | "layers" | "blocks";
  animation_duration: lf32;
  integrity: lf32;
  seed: lu32;
  pivot: vec3f;
};
export type EducationSharedResourceURI = { button_name: string; link_uri: string };
export type EducationExternalLinkSettings = { url: string; display_name: string };
export type BlockUpdate = {
  position: BlockCoordinates;
  runtime_id: varint;
  flags: varint;
  entity_unique_id: zigzag64;
  transition_type: "entity" | "create" | "destroy";
};
export type MaterialReducer = { mix: zigzag32; items: { network_id: zigzag32; count: zigzag32 } };
export type PermissionLevel = "visitor" | "member" | "operator" | "custom";
export type CommandPermissionLevel = "normal" | "operator" | "automation" | "host" | "owner" | "internal";
export type CommandPermissionLevelVarint = CommandPermissionLevel;
export type WindowID =
  | "inventory"
  | "first"
  | "last"
  | "offhand"
  | "armor"
  | "creative"
  | "hotbar"
  | "fixed_inventory"
  | "ui"
  | "drop_contents"
  | "beacon"
  | "trading_output"
  | "trading_use_inputs"
  | "trading_input_2"
  | "trading_input_1"
  | "enchant_output"
  | "enchant_material"
  | "enchant_input"
  | "anvil_output"
  | "anvil_result"
  | "anvil_material"
  | "container_input"
  | "crafting_use_ingredient"
  | "crafting_result"
  | "crafting_remove_ingredient"
  | "crafting_add_ingredient"
  | "none";
export type WindowIDVarint = WindowID;
export type WindowType =
  | "container"
  | "workbench"
  | "furnace"
  | "enchantment"
  | "brewing_stand"
  | "anvil"
  | "dispenser"
  | "dropper"
  | "hopper"
  | "cauldron"
  | "minecart_chest"
  | "minecart_hopper"
  | "horse"
  | "beacon"
  | "structure_editor"
  | "trading"
  | "command_block"
  | "jukebox"
  | "armor"
  | "hand"
  | "compound_creator"
  | "element_constructor"
  | "material_reducer"
  | "lab_table"
  | "loom"
  | "lectern"
  | "grindstone"
  | "blast_furnace"
  | "smoker"
  | "stonecutter"
  | "cartography"
  | "hud"
  | "jigsaw_editor"
  | "smithing_table"
  | "chest_boat"
  | "none"
  | "inventory";
export type ContainerSlotType =
  | "anvil_input"
  | "anvil_material"
  | "anvil_result"
  | "smithing_table_input"
  | "smithing_table_material"
  | "smithing_table_result"
  | "armor"
  | "container"
  | "beacon_payment"
  | "brewing_input"
  | "brewing_result"
  | "brewing_fuel"
  | "hotbar_and_inventory"
  | "crafting_input"
  | "crafting_output"
  | "recipe_construction"
  | "recipe_nature"
  | "recipe_items"
  | "recipe_search"
  | "recipe_search_bar"
  | "recipe_equipment"
  | "recipe_book"
  | "enchanting_input"
  | "enchanting_lapis"
  | "furnace_fuel"
  | "furnace_ingredient"
  | "furnace_output"
  | "horse_equip"
  | "hotbar"
  | "inventory"
  | "shulker"
  | "trade_ingredient1"
  | "trade_ingredient2"
  | "trade_result"
  | "offhand"
  | "compcreate_input"
  | "compcreate_output"
  | "elemconstruct_output"
  | "matreduce_input"
  | "matreduce_output"
  | "labtable_input"
  | "loom_input"
  | "loom_dye"
  | "loom_material"
  | "loom_result"
  | "blast_furnace_ingredient"
  | "smoker_ingredient"
  | "trade2_ingredient1"
  | "trade2_ingredient2"
  | "trade2_result"
  | "grindstone_input"
  | "grindstone_additional"
  | "grindstone_result"
  | "stonecutter_input"
  | "stonecutter_result"
  | "cartography_input"
  | "cartography_additional"
  | "cartography_result"
  | "barrel"
  | "cursor"
  | "creative_output";

export type SoundType =
  | "ItemUseOn"
  | "Hit"
  | "Step"
  | "Fly"
  | "Jump"
  | "Break"
  | "Place"
  | "HeavyStep"
  | "Gallop"
  | "Fall"
  | "Ambient"
  | "AmbientBaby"
  | "AmbientInWater"
  | "Breathe"
  | "Death"
  | "DeathInWater"
  | "DeathToZombie"
  | "Hurt"
  | "HurtInWater"
  | "Mad"
  | "Boost"
  | "Bow"
  | "SquishBig"
  | "SquishSmall"
  | "FallBig"
  | "FallSmall"
  | "Splash"
  | "Fizz"
  | "Flap"
  | "Swim"
  | "Drink"
  | "Eat"
  | "Takeoff"
  | "Shake"
  | "Plop"
  | "Land"
  | "Saddle"
  | "Armor"
  | "MobArmorStandPlace"
  | "AddChest"
  | "Throw"
  | "Attack"
  | "AttackNoDamage"
  | "AttackStrong"
  | "Warn"
  | "Shear"
  | "Milk"
  | "Thunder"
  | "Explode"
  | "Fire"
  | "Ignite"
  | "Fuse"
  | "Stare"
  | "Spawn"
  | "Shoot"
  | "BreakBlock"
  | "Launch"
  | "Blast"
  | "LargeBlast"
  | "Twinkle"
  | "Remedy"
  | "Infect"
  | "LevelUp"
  | "BowHit"
  | "BulletHit"
  | "ExtinguishFire"
  | "ItemFizz"
  | "ChestOpen"
  | "ChestClosed"
  | "ShulkerBoxOpen"
  | "ShulkerBoxClosed"
  | "EnderChestOpen"
  | "EnderChestClosed"
  | "PowerOn"
  | "PowerOff"
  | "Attach"
  | "Detach"
  | "Deny"
  | "Tripod"
  | "Pop"
  | "DropSlot"
  | "Note"
  | "Thorns"
  | "PistonIn"
  | "PistonOut"
  | "Portal"
  | "Water"
  | "LavaPop"
  | "Lava"
  | "Burp"
  | "BucketFillWater"
  | "BucketFillLava"
  | "BucketEmptyWater"
  | "BucketEmptyLava"
  | "ArmorEquipChain"
  | "ArmorEquipDiamond"
  | "ArmorEquipGeneric"
  | "ArmorEquipGold"
  | "ArmorEquipIron"
  | "ArmorEquipLeather"
  | "ArmorEquipElytra"
  | "Record13"
  | "RecordCat"
  | "RecordBlocks"
  | "RecordChirp"
  | "RecordFar"
  | "RecordMall"
  | "RecordMellohi"
  | "RecordStal"
  | "RecordStrad"
  | "RecordWard"
  | "Record11"
  | "RecordWait"
  | "StopRecord"
  | "Flop"
  | "GuardianCurse"
  | "MobWarning"
  | "MobWarningBaby"
  | "Teleport"
  | "ShulkerOpen"
  | "ShulkerClose"
  | "Haggle"
  | "HaggleYes"
  | "HaggleNo"
  | "HaggleIdle"
  | "ChorusGrow"
  | "ChorusDeath"
  | "Glass"
  | "PotionBrewed"
  | "CastSpell"
  | "PrepareAttackSpell"
  | "PrepareSummon"
  | "PrepareWololo"
  | "Fang"
  | "Charge"
  | "CameraTakePicture"
  | "LeashKnotPlace"
  | "LeashKnotBreak"
  | "AmbientGrowl"
  | "AmbientWhine"
  | "AmbientPant"
  | "AmbientPurr"
  | "AmbientPurreow"
  | "DeathMinVolume"
  | "DeathMidVolume"
  | "ImitateBlaze"
  | "ImitateCaveSpider"
  | "ImitateCreeper"
  | "ImitateElderGuardian"
  | "ImitateEnderDragon"
  | "ImitateEnderman"
  | "ImitateEndermite"
  | "ImitateEvocationIllager"
  | "ImitateGhast"
  | "ImitateHusk"
  | "ImitateIllusionIllager"
  | "ImitateMagmaCube"
  | "ImitatePolarBear"
  | "ImitateShulker"
  | "ImitateSilverfish"
  | "ImitateSkeleton"
  | "ImitateSlime"
  | "ImitateSpider"
  | "ImitateStray"
  | "ImitateVex"
  | "ImitateVindicationIllager"
  | "ImitateWitch"
  | "ImitateWither"
  | "ImitateWitherSkeleton"
  | "ImitateWolf"
  | "ImitateZombie"
  | "ImitateZombiePigman"
  | "ImitateZombieVillager"
  | "EnderEyePlaced"
  | "EndPortalCreated"
  | "AnvilUse"
  | "BottleDragonBreath"
  | "PortalTravel"
  | "TridentHit"
  | "TridentReturn"
  | "TridentRiptide1"
  | "TridentRiptide2"
  | "TridentRiptide3"
  | "TridentThrow"
  | "TridentThunder"
  | "TridentHitGround"
  | "Default"
  | "FletchingTableUse"
  | "ElemConstructOpen"
  | "IceBombHit"
  | "BalloonPop"
  | "LtReactionIceBomb"
  | "LtReactionBleach"
  | "LtReactionElephantToothpaste"
  | "LtReactionElephantToothpaste2"
  | "LtReactionGlowStick"
  | "LtReactionGlowStick2"
  | "LtReactionLuminol"
  | "LtReactionSalt"
  | "LtReactionFertilizer"
  | "LtReactionFireball"
  | "LtReactionMagnesiumSalt"
  | "LtReactionMiscFire"
  | "LtReactionFire"
  | "LtReactionMiscExplosion"
  | "LtReactionMiscMystical"
  | "LtReactionMiscMystical2"
  | "LtReactionProduct"
  | "SparklerUse"
  | "GlowStickUse"
  | "SparklerActive"
  | "ConvertToDrowned"
  | "BucketFillFish"
  | "BucketEmptyFish"
  | "BubbleColumnUpwards"
  | "BubbleColumnDownwards"
  | "BubblePop"
  | "BubbleUpInside"
  | "BubbleDownInside"
  | "HurtBaby"
  | "DeathBaby"
  | "StepBaby"
  | "SpawnBaby"
  | "Born"
  | "TurtleEggBreak"
  | "TurtleEggCrack"
  | "TurtleEggHatched"
  | "LayEgg"
  | "TurtleEggAttacked"
  | "BeaconActivate"
  | "BeaconAmbient"
  | "BeaconDeactivate"
  | "BeaconPower"
  | "ConduitActivate"
  | "ConduitAmbient"
  | "ConduitAttack"
  | "ConduitDeactivate"
  | "ConduitShort"
  | "Swoop"
  | "BambooSaplingPlace"
  | "PreSneeze"
  | "Sneeze"
  | "AmbientTame"
  | "Scared"
  | "ScaffoldingClimb"
  | "CrossbowLoadingStart"
  | "CrossbowLoadingMiddle"
  | "CrossbowLoadingEnd"
  | "CrossbowShoot"
  | "CrossbowQuickChargeStart"
  | "CrossbowQuickChargeMiddle"
  | "CrossbowQuickChargeEnd"
  | "AmbientAggressive"
  | "AmbientWorried"
  | "CantBreed"
  | "ShieldBlock"
  | "LecternBookPlace"
  | "GrindstoneUse"
  | "Bell"
  | "CampfireCrackle"
  | "Roar"
  | "Stun"
  | "SweetBerryBushHurt"
  | "SweetBerryBushPick"
  | "CartographyTableUse"
  | "StonecutterUse"
  | "ComposterEmpty"
  | "ComposterFill"
  | "ComposterFillLayer"
  | "ComposterReady"
  | "BarrelOpen"
  | "BarrelClose"
  | "RaidHorn"
  | "LoomUse"
  | "AmbientInRaid"
  | "UicartographyTableUse"
  | "UistonecutterUse"
  | "UiloomUse"
  | "SmokerUse"
  | "BlastFurnaceUse"
  | "SmithingTableUse"
  | "Screech"
  | "Sleep"
  | "FurnaceUse"
  | "MooshroomConvert"
  | "MilkSuspiciously"
  | "Celebrate"
  | "JumpPrevent"
  | "AmbientPollinate"
  | "BeehiveDrip"
  | "BeehiveEnter"
  | "BeehiveExit"
  | "BeehiveWork"
  | "BeehiveShear"
  | "HoneybottleDrink"
  | "AmbientCave"
  | "Retreat"
  | "ConvertToZombified"
  | "Admire"
  | "StepLava"
  | "Tempt"
  | "Panic"
  | "Angry"
  | "AmbientMoodWarpedForest"
  | "AmbientMoodSoulsandValley"
  | "AmbientMoodNetherWastes"
  | "AmbientMoodBasaltDeltas"
  | "AmbientMoodCrimsonForest"
  | "RespawnAnchorCharge"
  | "RespawnAnchorDeplete"
  | "RespawnAnchorSetSpawn"
  | "RespawnAnchorAmbient"
  | "SoulEscapeQuiet"
  | "SoulEscapeLoud"
  | "RecordPigstep"
  | "LinkCompassToLodestone"
  | "UseSmithingTable"
  | "EquipNetherite"
  | "AmbientLoopWarpedForest"
  | "AmbientLoopSoulsandValley"
  | "AmbientLoopNetherWastes"
  | "AmbientLoopBasaltDeltas"
  | "AmbientLoopCrimsonForest"
  | "AmbientAdditionWarpedForest"
  | "AmbientAdditionSoulsandValley"
  | "AmbientAdditionNetherWastes"
  | "AmbientAdditionBasaltDeltas"
  | "AmbientAdditionCrimsonForest"
  | "SculkSensorPowerOn"
  | "SculkSensorPowerOff"
  | "BucketFillPowderSnow"
  | "BucketEmptyPowderSnow"
  | "PointedDripstoneCauldronDripWater"
  | "PointedDripstoneCauldronDripLava"
  | "PointedDripstoneDripWater"
  | "PointedDripstoneDripLava"
  | "CaveVinesPickBerries"
  | "BigDripleafTiltDown"
  | "BigDripleafTiltUp"
  | "CopperWaxOn"
  | "CopperWaxOff"
  | "Scrape"
  | "PlayerHurtDrown"
  | "PlayerHurtOnFire"
  | "PlayerHurtFreeze"
  | "UseSpyglass"
  | "StopUsingSpyglass"
  | "AmethystBlockChime"
  | "AmbientScreamer"
  | "HurtScreamer"
  | "DeathScreamer"
  | "MilkScreamer"
  | "JumpToBlock"
  | "PreRam"
  | "PreRamScreamer"
  | "RamImpact"
  | "RamImpactScreamer"
  | "SquidInkSquirt"
  | "GlowSquidInkSquirt"
  | "ConvertToStray"
  | "CakeAddCandle"
  | "ExtinguishCandle"
  | "AmbientCandle"
  | "BlockClick"
  | "BlockClickFail"
  | "SculkCatalystBloom"
  | "SculkShriekerShriek"
  | "WardenNearbyClose"
  | "WardenNearbyCloser"
  | "WardenNearbyClosest"
  | "WardenSlightlyAngry"
  | "RecordOtherside"
  | "Tongue"
  | "CrackIronGolem"
  | "RepairIronGolem"
  | "Listening"
  | "Heartbeat"
  | "HornBreak"
  | "SculkPlace"
  | "SculkSpread"
  | "SculkCharge"
  | "SculkSensorPlace"
  | "SculkShriekerPlace"
  | "goat_call_0"
  | "goat_call_1"
  | "goat_call_2"
  | "goat_call_3"
  | "goat_call_4"
  | "goat_call_5"
  | "goat_call_6"
  | "goat_call_7"
  | "goat_call_8"
  | "goat_call_9"
  | "goat_harmony_0"
  | "goat_harmony_1"
  | "goat_harmony_2"
  | "goat_harmony_3"
  | "goat_harmony_4"
  | "goat_harmony_5"
  | "goat_harmony_6"
  | "goat_harmony_7"
  | "goat_harmony_8"
  | "goat_harmony_9"
  | "goat_melody_0"
  | "goat_melody_1"
  | "goat_melody_2"
  | "goat_melody_3"
  | "goat_melody_4"
  | "goat_melody_5"
  | "goat_melody_6"
  | "goat_melody_7"
  | "goat_melody_8"
  | "goat_melody_9"
  | "goat_bass_0"
  | "goat_bass_1"
  | "goat_bass_2"
  | "goat_bass_3"
  | "goat_bass_4"
  | "goat_bass_5"
  | "goat_bass_6"
  | "goat_bass_7"
  | "goat_bass_8"
  | "goat_bass_9"
  | "_"
  | "_"
  | "_"
  | "ImitateWarden"
  | "ListeningAngry"
  | "ItemGiven"
  | "ItemTaken"
  | "Disappeared"
  | "Reappeared"
  | "DrinkMilk"
  | "FrogspawnHatched"
  | "LaySpawn"
  | "FrogspawnBreak"
  | "SonicBoom"
  | "SonicCharge"
  | "SoundeventItemThrown"
  | "Record5"
  | "ConvertToFrog"
  | "RecordPlaying"
  | "DrinkMilk"
  | "RecordPlaying"
  | "EnchantingTableUse"
  | "StepSand"
  | "DashReady"
  | "BundleDropContents"
  | "BundleInsert"
  | "BundleRemoveOne"
  | "PressurePlateClickOff"
  | "PressurePlateClickOn"
  | "ButtonClickOff"
  | "ButtonClickOn"
  | "DoorOpen"
  | "DoorClose"
  | "TrapdoorOpen"
  | "TrapdoorClose"
  | "FenceGateOpen"
  | "FenceGateClose"
  | "Insert"
  | "Pickup"
  | "InsertEnchanted"
  | "PickupEnchanted"
  | "Brush"
  | "BrushCompleted"
  | "ShatterDecoratedPot"
  | "BreakDecoratedPot";

export type LegacyEntityType =
  | "chicken"
  | "cow"
  | "pig"
  | "sheep"
  | "wolf"
  | "villager"
  | "mooshroom"
  | "squid"
  | "rabbit"
  | "bat"
  | "iron_golem"
  | "snow_golem"
  | "ocelot"
  | "horse"
  | "donkey"
  | "mule"
  | "skeleton_horse"
  | "zombie_horse"
  | "polar_bear"
  | "llama"
  | "parrot"
  | "dolphin"
  | "zombie"
  | "creeper"
  | "skeleton"
  | "spider"
  | "zombie_pigman"
  | "slime"
  | "enderman"
  | "silverfish"
  | "cave_spider"
  | "ghast"
  | "magma_cube"
  | "blaze"
  | "zombie_villager"
  | "witch"
  | "stray"
  | "husk"
  | "wither_skeleton"
  | "guardian"
  | "elder_guardian"
  | "npc"
  | "wither"
  | "ender_dragon"
  | "shulker"
  | "endermite"
  | "agent"
  | "vindicator"
  | "phantom"
  | "armor_stand"
  | "tripod_camera"
  | "player"
  | "item"
  | "tnt"
  | "falling_block"
  | "moving_block"
  | "xp_bottle"
  | "xp_orb"
  | "eye_of_ender_signal"
  | "ender_crystal"
  | "fireworks_rocket"
  | "thrown_trident"
  | "turtle"
  | "cat"
  | "shulker_bullet"
  | "fishing_hook"
  | "chalkboard"
  | "dragon_fireball"
  | "arrow"
  | "snowball"
  | "egg"
  | "painting"
  | "minecart"
  | "fireball"
  | "splash_potion"
  | "ender_pearl"
  | "leash_knot"
  | "wither_skull"
  | "boat"
  | "wither_skull_dangerous"
  | "lightning_bolt"
  | "small_fireball"
  | "area_effect_cloud"
  | "hopper_minecart"
  | "tnt_minecart"
  | "chest_minecart"
  | "command_block_minecart"
  | "lingering_potion"
  | "llama_spit"
  | "evocation_fang"
  | "evocation_illager"
  | "vex"
  | "ice_bomb"
  | "balloon"
  | "pufferfish"
  | "salmon"
  | "drowned"
  | "tropicalfish"
  | "cod"
  | "panda";
export type DeviceOS =
  | "Undefined"
  | "Android"
  | "IOS"
  | "OSX"
  | "FireOS"
  | "GearVR"
  | "Hololens"
  | "Win10"
  | "Win32"
  | "Dedicated"
  | "TVOS"
  | "Orbis"
  | "NintendoSwitch"
  | "Xbox"
  | "WindowsPhone"
  | "Linux";
export type AbilityLayers = {
  type: "cache" | "base" | "spectator" | "commands" | "editor";
  allowed: AbilitySet;
  enabled: AbilitySet;
  fly_speed: lf32;
  walk_speed: lf32;
};
export type LoginTokens = { identity: string; client: string };
export type SubChunkEntryWithoutCaching = ({
  dx: u8;
  dy: u8;
  dz: u8;
  result:
    | "undefined"
    | "success"
    | "chunk_not_found"
    | "invalid_dimension"
    | "player_not_found"
    | "y_index_out_of_bounds"
    | "success_all_air";
  payload: Buffer;
} & (
  | {
      heightmap_type: "has_data";
      heightmap: Buffer; // len = 256
    }
  | {
      heightmap_type: "no_data" | "too_high" | "too_low";
    }
))[];
export type SubChunkEntryWithCaching = ({
  dx: u8;
  dy: u8;
  dz: u8;
  blob_id: lu64;
} & (
  | {
      result: "success_all_air";
    }
  | {
      result:
        | "undefined"
        | "success"
        | "chunk_not_found"
        | "invalid_dimension"
        | "player_not_found"
        | "y_index_out_of_bounds";
      payload: Buffer;
    }
) &
  (
    | {
        heightmap_type: "has_data";
        heightmap: Buffer; // len = 256
      }
    | {
        heightmap_type: "no_data" | "too_high" | "too_low";
      }
  ))[];
export type ByteArray = Buffer;
export type SignedByteArray = Buffer;
export type LittleString = string;
export type ShortArray = Buffer;
export type MetadataFlags1 = {
  onfire: boolean;
  sneaking: boolean;
  riding: boolean;
  sprinting: boolean;
  action: boolean;
  invisible: boolean;
  tempted: boolean;
  inlove: boolean;
  saddled: boolean;
  powered: boolean;
  ignited: boolean;
  baby: boolean;
  converting: boolean;
  critical: boolean;
  can_show_nametag: boolean;
  always_show_nametag: boolean;
  no_ai: boolean;
  silent: boolean;
  wallclimbing: boolean;
  can_climb: boolean;
  swimmer: boolean;
  can_fly: boolean;
  walker: boolean;
  resting: boolean;
  sitting: boolean;
  angry: boolean;
  interested: boolean;
  charged: boolean;
  tamed: boolean;
  orphaned: boolean;
  leashed: boolean;
  sheared: boolean;
  gliding: boolean;
  elder: boolean;
  moving: boolean;
  breathing: boolean;
  chested: boolean;
  stackable: boolean;
  showbase: boolean;
  rearing: boolean;
  vibrating: boolean;
  idling: boolean;
  evoker_spell: boolean;
  charge_attack: boolean;
  wasd_controlled: boolean;
  can_power_jump: boolean;
  can_dash: boolean;
  linger: boolean;
  has_collision: boolean;
  affected_by_gravity: boolean;
  fire_immune: boolean;
  dancing: boolean;
  enchanted: boolean;
  show_trident_rope: boolean;
  container_private: boolean;
  transforming: boolean;
  spin_attack: boolean;
  swimming: boolean;
  bribed: boolean;
  pregnant: boolean;
  laying_egg: boolean;
  rider_can_pick: boolean;
  transition_sitting: boolean;
  eating: boolean;
  laying_down: boolean;
};
export type MetadataFlags2 = {
  sneezing: boolean;
  trusting: boolean;
  rolling: boolean;
  scared: boolean;
  in_scaffolding: boolean;
  over_scaffolding: boolean;
  fall_through_scaffolding: boolean;
  blocking: boolean;
  transition_blocking: boolean;
  blocked_using_shield: boolean;
  blocked_using_damaged_shield: boolean;
  sleeping: boolean;
  wants_to_wake: boolean;
  trade_interest: boolean;
  door_breaker: boolean;
  breaking_obstruction: boolean;
  door_opener: boolean;
  illager_captain: boolean;
  stunned: boolean;
  roaring: boolean;
  delayed_attacking: boolean;
  avoiding_mobs: boolean;
  avoiding_block: boolean;
  facing_target_to_range_attack: boolean;
  hidden_when_invisible: boolean;
  is_in_ui: boolean;
  stalking: boolean;
  emoting: boolean;
  celebrating: boolean;
  admiring: boolean;
  celebrating_special: boolean;
  unknown95: boolean;
  ram_attack: boolean;
  playing_dead: boolean;
  in_ascendable_block: boolean;
  over_descendable_block: boolean;
  croaking: boolean;
  eat_mob: boolean;
  jump_goal_jump: boolean;
  emerging: boolean;
  sniffing: boolean;
  digging: boolean;
  sonic_boom: boolean;
  has_dash_cooldown: boolean;
  push_towards_closest_space: boolean;
};
export type AbilitySet = {
  build: boolean;
  mine: boolean;
  doors_and_switches: boolean;
  open_containers: boolean;
  attack_players: boolean;
  attack_mobs: boolean;
  operator_commands: boolean;
  teleport: boolean;
  invulnerable: boolean;
  flying: boolean;
  may_fly: boolean;
  instant_build: boolean;
  lightning: boolean;
  fly_speed: boolean;
  walk_speed: boolean;
  muted: boolean;
  world_builder: boolean;
  no_clip: boolean;
};
export type UpdateBlockFlags = {
  neighbors: boolean;
  network: boolean;
  no_graphic: boolean;
  unused: boolean;
  priority: boolean;
};
export type AdventureFlags = {
  world_immutable: boolean;
  no_pvp: boolean;
  auto_jump: boolean;
  allow_flight: boolean;
  no_clip: boolean;
  world_builder: boolean;
  flying: boolean;
  muted: boolean;
};
export type ActionPermissions = {
  mine: boolean;
  doors_and_switches: boolean;
  open_containers: boolean;
  attack_players: boolean;
  attack_mobs: boolean;
  operator: boolean;
  teleport: boolean;
  build: boolean;
  default: boolean;
};
export type UpdateMapFlags = { void: boolean; texture: boolean; decoration: boolean; initialisation: boolean };
export type CommandFlags = {
  unused: 0 | 1;
  collapse_enum: 0 | 1;
  has_semantic_constraint: 0 | 1;
  as_chained_command: 0 | 1;
  unknown2: number;
};
export type DeltaMoveFlags = {
  has_x: boolean;
  has_y: boolean;
  has_z: boolean;
  has_rot_x: boolean;
  has_rot_y: boolean;
  has_rot_z: boolean;
  on_ground: boolean;
  teleport: boolean;
  force_move: boolean;
};
export type InputFlag = {
  ascend: boolean;
  descend: boolean;
  north_jump: boolean;
  jump_down: boolean;
  sprint_down: boolean;
  change_height: boolean;
  jumping: boolean;
  auto_jumping_in_water: boolean;
  sneaking: boolean;
  sneak_down: boolean;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  up_left: boolean;
  up_right: boolean;
  want_up: boolean;
  want_down: boolean;
  want_down_slow: boolean;
  want_up_slow: boolean;
  sprinting: boolean;
  ascend_block: boolean;
  descend_block: boolean;
  sneak_toggle_down: boolean;
  persist_sneak: boolean;
  start_sprinting: boolean;
  stop_sprinting: boolean;
  start_sneaking: boolean;
  stop_sneaking: boolean;
  start_swimming: boolean;
  stop_swimming: boolean;
  start_jumping: boolean;
  start_gliding: boolean;
  stop_gliding: boolean;
  item_interact: boolean;
  block_action: boolean;
  item_stack_request: boolean;
  handled_teleport: boolean;
};
export type ArmorDamageType = { head: boolean; chest: boolean; legs: boolean; feet: boolean };
export type RequestPermissions = {
  build: boolean;
  mine: boolean;
  doors_and_switches: boolean;
  open_containers: boolean;
  attack_players: boolean;
  attack_mobs: boolean;
  operator: boolean;
  teleport: boolean;
};
export type InputLockFlags = {
  move: boolean;
  jump: boolean;
  sneak: boolean;
  mount: boolean;
  dismount: boolean;
  rotation: boolean;
};
