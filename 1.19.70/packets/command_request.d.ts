import { CommandOrigin, varint } from "../types";

export type command_request = {
  command: string;
  origin: CommandOrigin;
  internal: boolean;
  version: varint;
};
