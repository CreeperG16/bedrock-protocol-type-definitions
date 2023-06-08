import { li64, PermissionLevel, RequestPermissions } from "../types";

export type request_permissions = {
  entity_unique_id: li64;
  permission_level: PermissionLevel;
  requested_permissions: RequestPermissions;
};
