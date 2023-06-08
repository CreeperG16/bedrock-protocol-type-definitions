import { varint64 } from "../types";

export type emote = {
  entity_id: varint64;
  emote_id: string;
  flags: "server_side" | "mute_chat"; // flags are wrong maybe?
};
