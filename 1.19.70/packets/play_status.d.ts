import {} from "../types";

export type play_status = {
  status:
    | "login_success"
    | "failed_client"
    | "failed_spawn"
    | "failed_invalid_tenant"
    | "failed_vanilla_edu"
    | "failed_edu_vanilla"
    | "failed_server_full"
    | "failed_editor_vanilla_mismatch"
    | "failed_vanilla_editor_mismatch";
};
