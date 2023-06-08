import {
  varint,
  lu16,
  u8,
  li32,
  CommandFlags,
  li32,
  li32,
  u8,
  lu16,
  lu32,
} from "../types";

export type available_commands = {
  values_len: varint;
  enum_values: string[];
  suffixes: string[];
  command_data: {
    name: string;
    description: string;
    flags: lu16;
    permission_level: u8;
    alias: li32;
    overloads: {
      parameter_name: string;
      value_type:
        | "int"
        | "float"
        | "value"
        | "wildcard_int"
        | "operator"
        | "command_operator"
        | "target"
        | "wildcard_target"
        | "file_path"
        | "integer_range"
        | "equipment_slots"
        | "string"
        | "block_position"
        | "position"
        | "message"
        | "raw_text"
        | "json"
        | "block_states"
        | "command";
      enum_type: "valid" | "enum" | "suffixed" | "soft_enum";
      optional: boolean;
      options: CommandFlags;
    }[][];
  }[];
  dynamic_enums: { name: string; values: string[] }[];
  enum_constraints: {
    value_index: li32;
    enum_index: li32;
    constraints: {
      constraint:
        | "cheats_enabled"
        | "operator_permissions"
        | "host_permissions";
    }[];
  }[];
} & (
  | {
      _enum_type: "byte";
      enums: { name: string; values: u8[] }[];
    }
  | {
      _enum_type: "short";
      enums: { name: string; values: lu16[] }[];
    }
  | {
      _enum_type: "int";
      enums: { name: string; values: lu32[] }[];
    }
);
