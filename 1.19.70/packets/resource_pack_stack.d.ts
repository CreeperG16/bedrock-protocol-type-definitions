import {
  ResourcePackIdVersions,
  ResourcePackIdVersions,
  Experiments,
} from "../types";

export type resource_pack_stack = {
  must_accept: boolean;
  behavior_packs: ResourcePackIdVersions;
  resource_packs: ResourcePackIdVersions;
  game_version: string;
  experiments: Experiments;
  experiments_previously_used: boolean;
};
