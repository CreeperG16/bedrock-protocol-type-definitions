import { lu16, u8, lf32 } from "../types";

export type network_settings = {
  compression_threshold: lu16;
  compression_algorithm: "deflate" | "snappy";
  client_throttle: boolean;
  client_throttle_threshold: u8;
  client_throttle_scalar: lf32;
};
