import { lu64 } from "../types";

export type npc_dialogue = {
  entity_id: lu64;
  action_type: "open" | "close";
  dialogue: string;
  screen_name: string;
  npc_name: string;
  action_json: string;
};
