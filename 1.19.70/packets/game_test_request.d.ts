import { varint, varint, BlockCoordinates, varint } from "../types";

export type game_test_request = {
  max_tests_per_batch: varint;
  repetitions: varint;
  rotation: "0deg" | "90deg" | "180deg" | "270deg" | "360deg";
  stop_on_error: boolean;
  position: BlockCoordinates;
  tests_per_row: varint;
  name: string;
};
