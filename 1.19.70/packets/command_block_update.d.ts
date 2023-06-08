import { li32, BlockCoordinates, varint64 } from "../types";

export type command_block_update = {
  command: string;
  last_output: string;
  name: string;
  should_track_output: boolean;
  tick_delay: li32;
  execute_on_first_tick: boolean;
} & (
  | {
      is_block: true;
      position: BlockCoordinates;
      mode: "impulse" | "repeat" | "chain";
      needs_redstone: boolean;
      conditional: boolean;
    }
  | {
      is_block: false;
      minecart_entity_runtime_id: varint64;
    }
);
