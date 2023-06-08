import {
  li64,
  PermissionLevel,
  CommandPermissionLevel,
  AbilityLayers,
} from "../types";

export type client_cheat_ability = {
  entity_unique_id: li64;
  permission_level: PermissionLevel;
  command_permission: CommandPermissionLevel;
  abilities: AbilityLayers[];
};
