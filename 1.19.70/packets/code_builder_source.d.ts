import {} from "../types";

export type code_builder_source = {
  operation: "none" | "get" | "set" | "reset";
  category: "none" | "code_status" | "instantiation";
  value: string;
};
