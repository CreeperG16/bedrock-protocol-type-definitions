import { zigzag64, li32, lu16 } from "../types";

export type map_info_request = {
  map_id: zigzag64;
  client_pixels: { rgba: li32; index: lu16 }[];
};
