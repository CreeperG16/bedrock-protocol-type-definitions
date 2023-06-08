import { varint64, uuid } from "../types";

export type emote_list = { player_id: varint64; emote_pieces: uuid[] };
