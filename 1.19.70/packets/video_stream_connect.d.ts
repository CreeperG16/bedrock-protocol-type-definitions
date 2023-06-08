import { lf32, u8, li32, li32 } from "../types";

export type video_stream_connect = {
  server_uri: string;
  frame_send_frequency: lf32;
  action: u8;
  resolution_x: li32;
  resolution_y: li32;
};
