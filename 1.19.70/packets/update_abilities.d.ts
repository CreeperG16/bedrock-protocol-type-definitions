import {
  li64,
  PermissionLevel,
  CommandPermissionLevel,
  AbilityLayers,
} from "../types";

export type update_abilities = {
  entity_unique_id: li64;
  permission_level: PermissionLevel;
  command_permission: CommandPermissionLevel;
  abilities: AbilityLayers[];
};
