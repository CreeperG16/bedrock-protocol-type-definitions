import { zigzag32, nbt } from "../types";

export type position_tracking_db_broadcast = {
  broadcast_action: "update" | "destroy" | "not_found";
  tracking_id: zigzag32;
  nbt: nbt;
};
