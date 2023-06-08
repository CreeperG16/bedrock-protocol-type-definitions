import { login } from "./packets/login";
import { play_status } from "./packets/play_status";
import { server_to_client_handshake } from "./packets/server_to_client_handshake";
import { client_to_server_handshake } from "./packets/client_to_server_handshake";
import { disconnect } from "./packets/disconnect";
import { resource_packs_info } from "./packets/resource_packs_info";
import { resource_pack_stack } from "./packets/resource_pack_stack";
import { resource_pack_client_response } from "./packets/resource_pack_client_response";
import { text } from "./packets/text";
import { set_time } from "./packets/set_time";
import { start_game } from "./packets/start_game";
import { add_player } from "./packets/add_player";
import { add_entity } from "./packets/add_entity";
import { remove_entity } from "./packets/remove_entity";
import { add_item_entity } from "./packets/add_item_entity";
import { take_item_entity } from "./packets/take_item_entity";
import { move_entity } from "./packets/move_entity";
import { move_player } from "./packets/move_player";
import { rider_jump } from "./packets/rider_jump";
import { update_block } from "./packets/update_block";
import { add_painting } from "./packets/add_painting";
import { tick_sync } from "./packets/tick_sync";
import { level_sound_event_old } from "./packets/level_sound_event_old";
import { level_event } from "./packets/level_event";
import { block_event } from "./packets/block_event";
import { entity_event } from "./packets/entity_event";
import { mob_effect } from "./packets/mob_effect";
import { update_attributes } from "./packets/update_attributes";
import { inventory_transaction } from "./packets/inventory_transaction";
import { mob_equipment } from "./packets/mob_equipment";
import { mob_armor_equipment } from "./packets/mob_armor_equipment";
import { interact } from "./packets/interact";
import { block_pick_request } from "./packets/block_pick_request";
import { entity_pick_request } from "./packets/entity_pick_request";
import { player_action } from "./packets/player_action";
import { hurt_armor } from "./packets/hurt_armor";
import { set_entity_data } from "./packets/set_entity_data";
import { set_entity_motion } from "./packets/set_entity_motion";
import { set_entity_link } from "./packets/set_entity_link";
import { set_health } from "./packets/set_health";
import { set_spawn_position } from "./packets/set_spawn_position";
import { animate } from "./packets/animate";
import { respawn } from "./packets/respawn";
import { container_open } from "./packets/container_open";
import { container_close } from "./packets/container_close";
import { player_hotbar } from "./packets/player_hotbar";
import { inventory_content } from "./packets/inventory_content";
import { inventory_slot } from "./packets/inventory_slot";
import { container_set_data } from "./packets/container_set_data";
import { crafting_data } from "./packets/crafting_data";
import { crafting_event } from "./packets/crafting_event";
import { gui_data_pick_item } from "./packets/gui_data_pick_item";
import { adventure_settings } from "./packets/adventure_settings";
import { block_entity_data } from "./packets/block_entity_data";
import { player_input } from "./packets/player_input";
import { level_chunk } from "./packets/level_chunk";
import { set_commands_enabled } from "./packets/set_commands_enabled";
import { set_difficulty } from "./packets/set_difficulty";
import { change_dimension } from "./packets/change_dimension";
import { set_player_game_type } from "./packets/set_player_game_type";
import { player_list } from "./packets/player_list";
import { simple_event } from "./packets/simple_event";
import { event } from "./packets/event";
import { spawn_experience_orb } from "./packets/spawn_experience_orb";
import { clientbound_map_item_data } from "./packets/clientbound_map_item_data";
import { map_info_request } from "./packets/map_info_request";
import { request_chunk_radius } from "./packets/request_chunk_radius";
import { chunk_radius_update } from "./packets/chunk_radius_update";
import { item_frame_drop_item } from "./packets/item_frame_drop_item";
import { game_rules_changed } from "./packets/game_rules_changed";
import { camera } from "./packets/camera";
import { boss_event } from "./packets/boss_event";
import { show_credits } from "./packets/show_credits";
import { available_commands } from "./packets/available_commands";
import { command_request } from "./packets/command_request";
import { command_block_update } from "./packets/command_block_update";
import { command_output } from "./packets/command_output";
import { update_trade } from "./packets/update_trade";
import { update_equipment } from "./packets/update_equipment";
import { resource_pack_data_info } from "./packets/resource_pack_data_info";
import { resource_pack_chunk_data } from "./packets/resource_pack_chunk_data";
import { resource_pack_chunk_request } from "./packets/resource_pack_chunk_request";
import { transfer } from "./packets/transfer";
import { play_sound } from "./packets/play_sound";
import { stop_sound } from "./packets/stop_sound";
import { set_title } from "./packets/set_title";
import { add_behavior_tree } from "./packets/add_behavior_tree";
import { structure_block_update } from "./packets/structure_block_update";
import { show_store_offer } from "./packets/show_store_offer";
import { purchase_receipt } from "./packets/purchase_receipt";
import { player_skin } from "./packets/player_skin";
import { sub_client_login } from "./packets/sub_client_login";
import { initiate_web_socket_connection } from "./packets/initiate_web_socket_connection";
import { set_last_hurt_by } from "./packets/set_last_hurt_by";
import { book_edit } from "./packets/book_edit";
import { npc_request } from "./packets/npc_request";
import { photo_transfer } from "./packets/photo_transfer";
import { modal_form_request } from "./packets/modal_form_request";
import { modal_form_response } from "./packets/modal_form_response";
import { server_settings_request } from "./packets/server_settings_request";
import { server_settings_response } from "./packets/server_settings_response";
import { show_profile } from "./packets/show_profile";
import { set_default_game_type } from "./packets/set_default_game_type";
import { remove_objective } from "./packets/remove_objective";
import { set_display_objective } from "./packets/set_display_objective";
import { set_score } from "./packets/set_score";
import { lab_table } from "./packets/lab_table";
import { update_block_synced } from "./packets/update_block_synced";
import { move_entity_delta } from "./packets/move_entity_delta";
import { set_scoreboard_identity } from "./packets/set_scoreboard_identity";
import { set_local_player_as_initialized } from "./packets/set_local_player_as_initialized";
import { update_soft_enum } from "./packets/update_soft_enum";
import { network_stack_latency } from "./packets/network_stack_latency";
import { script_custom_event } from "./packets/script_custom_event";
import { spawn_particle_effect } from "./packets/spawn_particle_effect";
import { available_entity_identifiers } from "./packets/available_entity_identifiers";
import { level_sound_event_v2 } from "./packets/level_sound_event_v2";
import { network_chunk_publusher_update } from "./packets/network_chunk_publusher_update";
import { biome_definition_list } from "./packets/biome_definition_list";
import { level_sound_event } from "./packets/level_sound_event";
import { level_event_generic } from "./packets/level_event_generic";
import { lectern_update } from "./packets/lectern_update";
import { video_stream_connect } from "./packets/video_stream_connect";
import { add_ecs_entity } from "./packets/add_ecs_entity";
import { remove_ecs_entity } from "./packets/remove_ecs_entity";
import { client_cache_status } from "./packets/client_cache_status";
import { on_screen_texture_animation } from "./packets/on_screen_texture_animation";
import { map_create_locked_copy } from "./packets/map_create_locked_copy";
import { structure_template_data_export_request } from "./packets/structure_template_data_export_request";
import { structure_template_data_export_response } from "./packets/structure_template_data_export_response";
import { update_block_properties } from "./packets/update_block_properties";
import { client_cache_blob_status } from "./packets/client_cache_blob_status";
import { client_cache_miss_response } from "./packets/client_cache_miss_response";
import { education_settings } from "./packets/education_settings";
import { emote } from "./packets/emote";
import { multiplayer_settings } from "./packets/multiplayer_settings";
import { settings_command } from "./packets/settings_command";
import { anvil_damage } from "./packets/anvil_damage";
import { completed_using_item } from "./packets/completed_using_item";
import { network_settings } from "./packets/network_settings";
import { player_auth_input } from "./packets/player_auth_input";
import { creative_content } from "./packets/creative_content";
import { player_enchant_options } from "./packets/player_enchant_options";
import { item_stack_request } from "./packets/item_stack_request";
import { item_stack_response } from "./packets/item_stack_response";
import { player_armor_damage } from "./packets/player_armor_damage";
import { update_player_game_type } from "./packets/update_player_game_type";
import { emote_list } from "./packets/emote_list";
import { position_tracking_db_request } from "./packets/position_tracking_db_request";
import { position_tracking_db_broadcast } from "./packets/position_tracking_db_broadcast";
import { packet_violation_warning } from "./packets/packet_violation_warning";
import { motion_prediction_hints } from "./packets/motion_prediction_hints";
import { animate_entity } from "./packets/animate_entity";
import { camera_shake } from "./packets/camera_shake";
import { player_fog } from "./packets/player_fog";
import { correct_player_move_prediction } from "./packets/correct_player_move_prediction";
import { item_component } from "./packets/item_component";
import { filter_text_packet } from "./packets/filter_text_packet";
import { debug_renderer } from "./packets/debug_renderer";
import { sync_entity_property } from "./packets/sync_entity_property";
import { add_volume_entity } from "./packets/add_volume_entity";
import { remove_volume_entity } from "./packets/remove_volume_entity";
import { simulation_type } from "./packets/simulation_type";
import { npc_dialogue } from "./packets/npc_dialogue";
import { edu_uri_resource_packet } from "./packets/edu_uri_resource_packet";
import { create_photo } from "./packets/create_photo";
import { update_subchunk_blocks } from "./packets/update_subchunk_blocks";
import { photo_info_request } from "./packets/photo_info_request";
import { subchunk } from "./packets/subchunk";
import { subchunk_request } from "./packets/subchunk_request";
import { client_start_item_cooldown } from "./packets/client_start_item_cooldown";
import { script_message } from "./packets/script_message";
import { code_builder_source } from "./packets/code_builder_source";
import { ticking_areas_load_status } from "./packets/ticking_areas_load_status";
import { dimension_data } from "./packets/dimension_data";
import { agent_action } from "./packets/agent_action";
import { change_mob_property } from "./packets/change_mob_property";
import { lesson_progress } from "./packets/lesson_progress";
import { request_ability } from "./packets/request_ability";
import { request_permissions } from "./packets/request_permissions";
import { toast_request } from "./packets/toast_request";
import { update_abilities } from "./packets/update_abilities";
import { update_adventure_settings } from "./packets/update_adventure_settings";
import { death_info } from "./packets/death_info";
import { editor_network } from "./packets/editor_network";
import { feature_registry } from "./packets/feature_registry";
import { server_stats } from "./packets/server_stats";
import { request_network_settings } from "./packets/request_network_settings";
import { game_test_request } from "./packets/game_test_request";
import { game_test_results } from "./packets/game_test_results";
import { update_client_input_locks } from "./packets/update_client_input_locks";
import { client_cheat_ability } from "./packets/client_cheat_ability";

export * from "./types";

export const version = "1.19.70";

export type Packet =
  | { name: "login"; params: login }
  | { name: "play_status"; params: play_status }
  | { name: "server_to_client_handshake"; params: server_to_client_handshake }
  | { name: "client_to_server_handshake"; params: client_to_server_handshake }
  | { name: "disconnect"; params: disconnect }
  | { name: "resource_packs_info"; params: resource_packs_info }
  | { name: "resource_pack_stack"; params: resource_pack_stack }
  | { name: "resource_pack_client_response"; params: resource_pack_client_response }
  | { name: "text"; params: text }
  | { name: "set_time"; params: set_time }
  | { name: "start_game"; params: start_game }
  | { name: "add_player"; params: add_player }
  | { name: "add_entity"; params: add_entity }
  | { name: "remove_entity"; params: remove_entity }
  | { name: "add_item_entity"; params: add_item_entity }
  | { name: "take_item_entity"; params: take_item_entity }
  | { name: "move_entity"; params: move_entity }
  | { name: "move_player"; params: move_player }
  | { name: "rider_jump"; params: rider_jump }
  | { name: "update_block"; params: update_block }
  | { name: "add_painting"; params: add_painting }
  | { name: "tick_sync"; params: tick_sync }
  | { name: "level_sound_event_old"; params: level_sound_event_old }
  | { name: "level_event"; params: level_event }
  | { name: "block_event"; params: block_event }
  | { name: "entity_event"; params: entity_event }
  | { name: "mob_effect"; params: mob_effect }
  | { name: "update_attributes"; params: update_attributes }
  | { name: "inventory_transaction"; params: inventory_transaction }
  | { name: "mob_equipment"; params: mob_equipment }
  | { name: "mob_armor_equipment"; params: mob_armor_equipment }
  | { name: "interact"; params: interact }
  | { name: "block_pick_request"; params: block_pick_request }
  | { name: "entity_pick_request"; params: entity_pick_request }
  | { name: "player_action"; params: player_action }
  | { name: "hurt_armor"; params: hurt_armor }
  | { name: "set_entity_data"; params: set_entity_data }
  | { name: "set_entity_motion"; params: set_entity_motion }
  | { name: "set_entity_link"; params: set_entity_link }
  | { name: "set_health"; params: set_health }
  | { name: "set_spawn_position"; params: set_spawn_position }
  | { name: "animate"; params: animate }
  | { name: "respawn"; params: respawn }
  | { name: "container_open"; params: container_open }
  | { name: "container_close"; params: container_close }
  | { name: "player_hotbar"; params: player_hotbar }
  | { name: "inventory_content"; params: inventory_content }
  | { name: "inventory_slot"; params: inventory_slot }
  | { name: "container_set_data"; params: container_set_data }
  | { name: "crafting_data"; params: crafting_data }
  | { name: "crafting_event"; params: crafting_event }
  | { name: "gui_data_pick_item"; params: gui_data_pick_item }
  | { name: "adventure_settings"; params: adventure_settings }
  | { name: "block_entity_data"; params: block_entity_data }
  | { name: "player_input"; params: player_input }
  | { name: "level_chunk"; params: level_chunk }
  | { name: "set_commands_enabled"; params: set_commands_enabled }
  | { name: "set_difficulty"; params: set_difficulty }
  | { name: "change_dimension"; params: change_dimension }
  | { name: "set_player_game_type"; params: set_player_game_type }
  | { name: "player_list"; params: player_list }
  | { name: "simple_event"; params: simple_event }
  | { name: "event"; params: event }
  | { name: "spawn_experience_orb"; params: spawn_experience_orb }
  | { name: "clientbound_map_item_data"; params: clientbound_map_item_data }
  | { name: "map_info_request"; params: map_info_request }
  | { name: "request_chunk_radius"; params: request_chunk_radius }
  | { name: "chunk_radius_update"; params: chunk_radius_update }
  | { name: "item_frame_drop_item"; params: item_frame_drop_item }
  | { name: "game_rules_changed"; params: game_rules_changed }
  | { name: "camera"; params: camera }
  | { name: "boss_event"; params: boss_event }
  | { name: "show_credits"; params: show_credits }
  | { name: "available_commands"; params: available_commands }
  | { name: "command_request"; params: command_request }
  | { name: "command_block_update"; params: command_block_update }
  | { name: "command_output"; params: command_output }
  | { name: "update_trade"; params: update_trade }
  | { name: "update_equipment"; params: update_equipment }
  | { name: "resource_pack_data_info"; params: resource_pack_data_info }
  | { name: "resource_pack_chunk_data"; params: resource_pack_chunk_data }
  | { name: "resource_pack_chunk_request"; params: resource_pack_chunk_request }
  | { name: "transfer"; params: transfer }
  | { name: "play_sound"; params: play_sound }
  | { name: "stop_sound"; params: stop_sound }
  | { name: "set_title"; params: set_title }
  | { name: "add_behavior_tree"; params: add_behavior_tree }
  | { name: "structure_block_update"; params: structure_block_update }
  | { name: "show_store_offer"; params: show_store_offer }
  | { name: "purchase_receipt"; params: purchase_receipt }
  | { name: "player_skin"; params: player_skin }
  | { name: "sub_client_login"; params: sub_client_login }
  | { name: "initiate_web_socket_connection"; params: initiate_web_socket_connection }
  | { name: "set_last_hurt_by"; params: set_last_hurt_by }
  | { name: "book_edit"; params: book_edit }
  | { name: "npc_request"; params: npc_request }
  | { name: "photo_transfer"; params: photo_transfer }
  | { name: "modal_form_request"; params: modal_form_request }
  | { name: "modal_form_response"; params: modal_form_response }
  | { name: "server_settings_request"; params: server_settings_request }
  | { name: "server_settings_response"; params: server_settings_response }
  | { name: "show_profile"; params: show_profile }
  | { name: "set_default_game_type"; params: set_default_game_type }
  | { name: "remove_objective"; params: remove_objective }
  | { name: "set_display_objective"; params: set_display_objective }
  | { name: "set_score"; params: set_score }
  | { name: "lab_table"; params: lab_table }
  | { name: "update_block_synced"; params: update_block_synced }
  | { name: "move_entity_delta"; params: move_entity_delta }
  | { name: "set_scoreboard_identity"; params: set_scoreboard_identity }
  | { name: "set_local_player_as_initialized"; params: set_local_player_as_initialized }
  | { name: "update_soft_enum"; params: update_soft_enum }
  | { name: "network_stack_latency"; params: network_stack_latency }
  | { name: "script_custom_event"; params: script_custom_event }
  | { name: "spawn_particle_effect"; params: spawn_particle_effect }
  | { name: "available_entity_identifiers"; params: available_entity_identifiers }
  | { name: "level_sound_event_v2"; params: level_sound_event_v2 }
  | { name: "network_chunk_publusher_update"; params: network_chunk_publusher_update }
  | { name: "biome_definition_list"; params: biome_definition_list }
  | { name: "level_sound_event"; params: level_sound_event }
  | { name: "level_event_generic"; params: level_event_generic }
  | { name: "lectern_update"; params: lectern_update }
  | { name: "video_stream_connect"; params: video_stream_connect }
  | { name: "add_ecs_entity"; params: add_ecs_entity }
  | { name: "remove_ecs_entity"; params: remove_ecs_entity }
  | { name: "client_cache_status"; params: client_cache_status }
  | { name: "on_screen_texture_animation"; params: on_screen_texture_animation }
  | { name: "map_create_locked_copy"; params: map_create_locked_copy }
  | {
      name: "structure_template_data_export_request";
      params: structure_template_data_export_request;
    }
  | {
      name: "structure_template_data_export_response";
      params: structure_template_data_export_response;
    }
  | { name: "update_block_properties"; params: update_block_properties }
  | { name: "client_cache_blob_status"; params: client_cache_blob_status }
  | { name: "client_cache_miss_response"; params: client_cache_miss_response }
  | { name: "education_settings"; params: education_settings }
  | { name: "emote"; params: emote }
  | { name: "multiplayer_settings"; params: multiplayer_settings }
  | { name: "settings_command"; params: settings_command }
  | { name: "anvil_damage"; params: anvil_damage }
  | { name: "completed_using_item"; params: completed_using_item }
  | { name: "network_settings"; params: network_settings }
  | { name: "player_auth_input"; params: player_auth_input }
  | { name: "creative_content"; params: creative_content }
  | { name: "player_enchant_options"; params: player_enchant_options }
  | { name: "item_stack_request"; params: item_stack_request }
  | { name: "item_stack_response"; params: item_stack_response }
  | { name: "player_armor_damage"; params: player_armor_damage }
  | { name: "update_player_game_type"; params: update_player_game_type }
  | { name: "emote_list"; params: emote_list }
  | { name: "position_tracking_db_request"; params: position_tracking_db_request }
  | { name: "position_tracking_db_broadcast"; params: position_tracking_db_broadcast }
  | { name: "packet_violation_warning"; params: packet_violation_warning }
  | { name: "motion_prediction_hints"; params: motion_prediction_hints }
  | { name: "animate_entity"; params: animate_entity }
  | { name: "camera_shake"; params: camera_shake }
  | { name: "player_fog"; params: player_fog }
  | { name: "correct_player_move_prediction"; params: correct_player_move_prediction }
  | { name: "item_component"; params: item_component }
  | { name: "filter_text_packet"; params: filter_text_packet }
  | { name: "debug_renderer"; params: debug_renderer }
  | { name: "sync_entity_property"; params: sync_entity_property }
  | { name: "add_volume_entity"; params: add_volume_entity }
  | { name: "remove_volume_entity"; params: remove_volume_entity }
  | { name: "simulation_type"; params: simulation_type }
  | { name: "npc_dialogue"; params: npc_dialogue }
  | { name: "edu_uri_resource_packet"; params: edu_uri_resource_packet }
  | { name: "create_photo"; params: create_photo }
  | { name: "update_subchunk_blocks"; params: update_subchunk_blocks }
  | { name: "photo_info_request"; params: photo_info_request }
  | { name: "subchunk"; params: subchunk }
  | { name: "subchunk_request"; params: subchunk_request }
  | { name: "client_start_item_cooldown"; params: client_start_item_cooldown }
  | { name: "script_message"; params: script_message }
  | { name: "code_builder_source"; params: code_builder_source }
  | { name: "ticking_areas_load_status"; params: ticking_areas_load_status }
  | { name: "dimension_data"; params: dimension_data }
  | { name: "agent_action"; params: agent_action }
  | { name: "change_mob_property"; params: change_mob_property }
  | { name: "lesson_progress"; params: lesson_progress }
  | { name: "request_ability"; params: request_ability }
  | { name: "request_permissions"; params: request_permissions }
  | { name: "toast_request"; params: toast_request }
  | { name: "update_abilities"; params: update_abilities }
  | { name: "update_adventure_settings"; params: update_adventure_settings }
  | { name: "death_info"; params: death_info }
  | { name: "editor_network"; params: editor_network }
  | { name: "feature_registry"; params: feature_registry }
  | { name: "server_stats"; params: server_stats }
  | { name: "request_network_settings"; params: request_network_settings }
  | { name: "game_test_request"; params: game_test_request }
  | { name: "game_test_results"; params: game_test_results }
  | { name: "update_client_input_locks"; params: update_client_input_locks }
  | { name: "client_cheat_ability"; params: client_cheat_ability };
