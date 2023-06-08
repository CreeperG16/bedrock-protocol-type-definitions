import { zigzag32, zigzag32, zigzag32 } from "../types";

export type set_title = {
  type:
    | "clear"
    | "reset"
    | "set_title"
    | "set_subtitle"
    | "action_bar_message"
    | "set_durations"
    | "set_title_json"
    | "set_subtitle_json"
    | "action_bar_message_json";
  text: string;
  fade_in_time: zigzag32;
  stay_time: zigzag32;
  fade_out_time: zigzag32;
  xuid: string;
  platform_online_id: string;
};
