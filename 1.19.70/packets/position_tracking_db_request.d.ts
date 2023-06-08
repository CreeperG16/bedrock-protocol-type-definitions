import { zigzag32 } from "../types";

export type position_tracking_db_request = {
  action: "query";
  tracking_id: zigzag32;
};
