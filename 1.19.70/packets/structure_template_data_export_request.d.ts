import { BlockCoordinates, StructureBlockSettings } from "../types";

export type structure_template_data_export_request = {
  name: string;
  position: BlockCoordinates;
  settings: StructureBlockSettings;
  request_type:
    | "export_from_save"
    | "export_from_load"
    | "query_saved_structure"
    | "import_from_save";
};
