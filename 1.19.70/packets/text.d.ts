import {} from "../types";

export type text = {
  needs_translation: boolean;
  xuid: "string";
  platform_chat_id: "string";
  message: string;
} & (
  | {
      type: "chat" | "whisper" | "announcement";
      source_name: string;
    }
  | {
      type: "raw" | "tip" | "system" | "json_whisper" | "json" | "json_announcement";
    }
  | {
      type: "translation" | "popup" | "jukebox_popup";

      parameters: string[];
    }
);
