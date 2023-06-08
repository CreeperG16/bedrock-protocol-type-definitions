import { varint64 } from "../types";

export type npc_request = {
  runtime_entity_id: varint64;
  request_type:
    | "set_actions"
    | "execute_action"
    | "execute_closing_commands"
    | "set_name"
    | "set_skin"
    | "set_interaction_text";
  command: string;
  action_type:
    | "set_actions"
    | "execute_action"
    | "execute_closing_commands"
    | "set_name"
    | "set_skin"
    | "set_interact_text"
    | "execute_openining_commands";
  scene_name: string;
};
