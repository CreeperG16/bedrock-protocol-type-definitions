import { InputLockFlags, vec3f } from "../types";

export type update_client_input_locks = {
  locks: InputLockFlags;
  position: vec3f;
};
