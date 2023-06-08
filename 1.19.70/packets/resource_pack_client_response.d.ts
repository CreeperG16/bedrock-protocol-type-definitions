import { ResourcePackIds } from "../types";

export type resource_pack_client_response = {
  response_status:
    | "none"
    | "refused"
    | "send_packs"
    | "have_all_packs"
    | "completed";
  resourcepackids: ResourcePackIds;
};
