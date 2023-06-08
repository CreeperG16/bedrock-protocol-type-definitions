import {
  BlockCoordinates,
  zigzag32,
  StructureBlockSettings,
  zigzag32,
} from "../types";

export type structure_block_update = {
  position: BlockCoordinates;
  structure_name: string;
  data_field: string;
  include_players: boolean;
  show_bounding_box: boolean;
  structure_block_type: zigzag32;
  settings: StructureBlockSettings;
  redstone_save_mode: zigzag32;
  should_trigger: boolean;
  water_logged: boolean;
};
