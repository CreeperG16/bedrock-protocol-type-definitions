import { uuid, Skin } from "../types";

export type player_skin = {
  uuid: uuid;
  skin: Skin;
  skin_name: string;
  old_skin_name: string;
  is_verified: boolean;
};
