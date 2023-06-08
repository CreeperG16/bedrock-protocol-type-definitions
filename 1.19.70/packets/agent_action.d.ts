import {} from "../types";

export type agent_action = {
  request_id: string;
  action_type:
    | "none"
    | "attack"
    | "collect"
    | "destroy"
    | "detect_redstone"
    | "detect_obstacle"
    | "drop"
    | "drop_all"
    | "inspect"
    | "inspect_data"
    | "inspect_item_count"
    | "inspect_item_detail"
    | "inspect_item_space"
    | "interact"
    | "move"
    | "place_block"
    | "till"
    | "transfer_item_to"
    | "turn";
  body: string;
};
