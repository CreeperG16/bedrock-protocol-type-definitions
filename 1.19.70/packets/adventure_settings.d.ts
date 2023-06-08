import {
  AdventureFlags,
  CommandPermissionLevelVarint,
  ActionPermissions,
  PermissionLevel,
  varint,
  li64,
} from "../types";

export type adventure_settings = {
  flags: AdventureFlags;
  command_permission: CommandPermissionLevelVarint;
  action_permission: ActionPermissions;
  permission_level: PermissionLevel;
  custom_stored_permissions: varint;
  user_id: li64;
};
