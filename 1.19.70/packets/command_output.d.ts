import { CommandOrigin, varint } from "../types";

export type command_output = {
  origin: CommandOrigin;
  success_count: varint;
  output: {
    success: boolean;
    message_id: string;
    parameters: string[];
  }[];
} & (
  | {
      output_type: "last" | "silent" | "all";
    }
  | {
      output_type: "data_set";
      data_set: string;
    }
);
