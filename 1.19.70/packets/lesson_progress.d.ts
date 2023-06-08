import { u8, zigzag32 } from "../types";

export type lesson_progress = {
  action: u8;
  score: zigzag32;
  identifier: string;
};
