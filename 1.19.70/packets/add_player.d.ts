import {
  uuid,
  varint64,
  vec3f,
  vec3f,
  lf32,
  lf32,
  lf32,
  Item,
  GameMode,
  MetadataDictionary,
  EntityProperties,
  li64,
  PermissionLevel,
  CommandPermissionLevel,
  AbilityLayers,
  Links,
  DeviceOS,
} from "../types";

export type add_player = {
  uuid: uuid;
  username: string;
  runtime_id: varint64;
  platform_chat_id: string;
  position: vec3f;
  velocity: vec3f;
  pitch: lf32;
  yaw: lf32;
  head_yaw: lf32;
  held_item: Item;
  gamemode: GameMode;
  metadata: MetadataDictionary;
  properties: EntityProperties;
  unique_id: li64;
  permission_level: PermissionLevel;
  command_permission: CommandPermissionLevel;
  abilities: AbilityLayers[];
  links: Links;
  device_id: string;
  device_os: DeviceOS;
};
