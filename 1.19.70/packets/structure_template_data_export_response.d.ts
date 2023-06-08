import { nbt } from "../types";

export type structure_template_data_export_response = {
  name: string;
  response_type: "export" | "query" | "import";
} & (
  | {
      success: true;
      nbt: nbt;
    }
  | {
      success: false;
    }
);
