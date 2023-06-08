import { BehaviourPackInfos, TexturePackInfos } from "../types";

export type resource_packs_info = {
  must_accept: boolean;
  has_scripts: boolean;
  force_server_packs: boolean;
  behaviour_packs: BehaviourPackInfos;
  texture_packs: TexturePackInfos;
};
