import { GameMode, zigzag64 } from "../types";

export type update_player_game_type = {
  gamemode: GameMode;
  player_unique_id: zigzag64;
};
