import { check, vec3f, zigzag32 } from "../types";

export type level_event = {
  event:
    | "sound_click"
    | "sound_click_fail"
    | "sound_shoot"
    | "sound_door"
    | "sound_fizz"
    | "sound_ignite"
    | "sound_ghast"
    | "sound_ghast_shoot"
    | "sound_blaze_shoot"
    | "sound_door_bump"
    | "sound_door_crash"
    | "sound_enderman_teleport"
    | "sound_anvil_break"
    | "sound_anvil_use"
    | "sound_anvil_fall"
    | "sound_pop"
    | "sound_portal"
    | "sound_itemframe_add_item"
    | "sound_itemframe_remove"
    | "sound_itemframe_place"
    | "sound_itemframe_remove_item"
    | "sound_itemframe_rotate_item"
    | "sound_camera"
    | "sound_orb"
    | "sound_totem"
    | "sound_armor_stand_break"
    | "sound_armor_stand_hit"
    | "sound_armor_stand_fall"
    | "sound_armor_stand_place"
    | "pointed_dripstone_land"
    | "dye_used"
    | "ink_sack_used"
    | "particle_shoot" //TODO: check 2000-2017
    | "particle_destroy"
    | "particle_splash"
    | "particle_eye_despawn"
    | "particle_spawn"
    | "particle_crop_growth"
    | "particle_guardian_curse"
    | "particle_death_smoke"
    | "particle_block_force_field"
    | "particle_projectile_hit"
    | "particle_dragon_egg_teleport"
    | "particle_crop_eaten"
    | "particle_critical"
    | "particle_enderman_teleport"
    | "particle_punch_block"
    | "particle_bubble"
    | "particle_evaporate"
    | "particle_destroy_armor_stand"
    | "particle_breaking_egg"
    | "particle_destroy_egg"
    | "particle_evaporate_water"
    | "particle_destroy_block_no_sound"
    | "particle_knockback_roar"
    | "particle_teleport_trail"
    | "particle_point_cloud"
    | "particle_explosion"
    | "particle_block_explosion"
    | "particle_vibration_signal"
    | "particle_dripstone_drip"
    | "particle_fizz_effect"
    | "particle_wax_on"
    | "particle_wax_off"
    | "particle_scrape"
    | "particle_electric_spark"
    | "particle_turtle_egg"
    | "particle_sculk_shriek"
    | "sculk_catalyst_bloom"
    | "sculk_charge"
    | "sculk_charge_pop"
    | "sonic_explosion"
    | "start_rain"
    | "start_thunder"
    | "stop_rain"
    | "stop_thunder"
    | "pause_game" //data: 1 to pause, 0 to resume
    | "pause_game_no_screen" //data: 1 to pause, 0 to resume - same effect as normal pause but without screen
    | "set_game_speed" //x coordinate of pos = scale factor (default 1.0)
    | "redstone_trigger"
    | "cauldron_explode"
    | "cauldron_dye_armor"
    | "cauldron_clean_armor"
    | "cauldron_fill_potion"
    | "cauldron_take_potion"
    | "cauldron_fill_water"
    | "cauldron_take_water"
    | "cauldron_add_dye"
    | "cauldron_clean_banner"
    | "block_start_break"
    | "block_stop_break"
    | "set_data"
    | "players_sleeping"
    | "sleeping_players"
    | "add_particle_mask"
    // 0x4000 + particle ID
    | "add_particle_bubble" // 1
    | "add_particle_bubble_manual" // 2
    | "add_particle_critical" // 3
    | "add_particle_block_force_field" // 4
    | "add_particle_smoke" // 5
    | "add_particle_explode" // 6
    | "add_particle_evaporation" // 7
    | "add_particle_flame" // 8
    | "add_particle_candle_flame" // 9
    | "add_particle_lava" // 10
    | "add_particle_large_smoke" // 11
    | "add_particle_redstone" // 12
    | "add_particle_rising_red_dust" // 13
    | "add_particle_item_break" // 14
    | "add_particle_snowball_poof" // 15
    | "add_particle_huge_explode" // 16
    | "add_particle_huge_explode_seed" // 17
    | "add_particle_mob_flame" // 18
    | "add_particle_heart" // 19
    | "add_particle_terrain" // 20
    | "add_particle_town_aura" // 21
    | "add_particle_portal" // 22
    | "add_particle_water_splash" // 24
    | "add_particle_water_splash_manual" // 25
    | "add_particle_water_wake" // 26
    | "add_particle_drip_water" // 27
    | "add_particle_drip_lava" // 28
    | "add_particle_drip_honey" // 29
    | "add_particle_stalactite_drip_water" // 30
    | "add_particle_stalactite_drip_lava" // 31
    | "add_particle_falling_dust" // 32
    | "add_particle_mob_spell" // 33
    | "add_particle_mob_spell_ambient" // 34
    | "add_particle_mob_spell_instantaneous" // 35
    | "add_particle_ink" // 36
    | "add_particle_slime" // 37
    | "add_particle_rain_splash" // 38
    | "add_particle_villager_angry" // 39
    | "add_particle_villager_happy" // 40
    | "add_particle_enchantment_table" // 41
    | "add_particle_tracking_emitter" // 42
    | "add_particle_note" // 43
    | "add_particle_witch_spell" // 44
    | "add_particle_carrot" // 45
    | "add_particle_mob_appearance" // 46
    | "add_particle_end_rod" // 47
    | "add_particle_dragons_breath" // 48
    | "add_particle_spit" // 49
    | "add_particle_totem" // 50
    | "add_particle_food" // 51
    | "add_particle_fireworks_starter" // 52
    | "add_particle_fireworks_spark" // 53
    | "add_particle_fireworks_overlay" // 54
    | "add_particle_balloon_gas" // 55
    | "add_particle_colored_flame" // 56
    | "add_particle_sparkler" // 57
    | "add_particle_conduit" // 58
    | "add_particle_bubble_column_up" // 59
    | "add_particle_bubble_column_down" // 60
    | "add_particle_sneeze" // 61
    | "add_particle_shulker_bullet" // 62
    | "add_particle_bleach" // 63
    | "add_particle_dragon_destroy_block" // 64
    | "add_particle_mycelium_dust" // 65
    | "add_particle_falling_red_dust" // 66
    | "add_particle_campfire_smoke" // 67
    | "add_particle_tall_campfire_smoke" // 68
    | "add_particle_dragon_breath_fire" // 69
    | "add_particle_dragon_breath_trail" // 70
    | "add_particle_blue_flame" // 71
    | "add_particle_soul" // 72
    | "add_particle_obsidian_tear" // 73
    | "add_particle_portal_reverse" // 74
    | "add_particle_snowflake" // 75
    | "add_particle_vibration_signal" // 76
    | "add_particle_sculk_sensor_redstone" // 77
    | "add_particle_spore_blossom_shower" // 78
    | "add_particle_spore_blossom_ambient" // 79
    | "add_particle_wax" // 80
    | "add_particle_electric_spark"; // 81
  position: vec3f;
  data: zigzag32;
};
