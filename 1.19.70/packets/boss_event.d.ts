import {
  zigzag64,
  lf32,
  li16,
  varint,
  varint,
  zigzag64,
  lf32,
  li16,
  varint,
  varint,
  varint,
  varint,
} from "../types";

export type boss_event = {
  boss_entity_id: zigzag64;
} & (
  | {
      type: "show_bar";
      title: string;
      progress: lf32;
      screen_darkening: li16;
      color: varint;
      overlay: varint;
    }
  | {
      type: "register_player" | "unregister_player" | "query";
      player_id: zigzag64;
    }
  | {
      type: "set_bar_progress";
      progress: lf32;
    }
  | {
      type: "set_bar_title";
      title: string;
    }
  | {
      type: "update_properties";
      screen_darkening: li16;
      color: varint;
      overlay: varint;
    }
  | {
      type: "texture";
      color: varint;
      overlay: varint;
    }
  | {
      type: "hide_bar";
    }
);
