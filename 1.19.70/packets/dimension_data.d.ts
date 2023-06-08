import { zigzag32, zigzag32 } from "../types";

export type dimension_data = {
  definitions: {
    id: string;
    max_height: zigzag32;
    min_height: zigzag32;
    generator: "legacy" | "overworld" | "flat" | "nether" | "end" | "void";
  }[];
};
