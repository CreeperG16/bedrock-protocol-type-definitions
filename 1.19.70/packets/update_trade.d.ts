import {
  WindowID,
  WindowType,
  varint,
  varint,
  varint64,
  varint64,
  nbt,
} from "../types";

export type update_trade = {
  window_id: WindowID;
  window_type: WindowType;
  size: varint;
  trade_tier: varint;
  villager_unique_id: varint64;
  entity_unique_id: varint64;
  display_name: string;
  new_trading_ui: boolean;
  economic_trades: boolean;
  offers: nbt;
};
