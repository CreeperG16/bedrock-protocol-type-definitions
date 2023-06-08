import { varint } from "../types";

export type modal_form_response = {
  form_id: varint;
} & ({ has_response_data: true; data: string } | { has_response_data: false }) &
  (
    | { has_cancel_reason: true; cancel_reason: "closed" | "busy" }
    | { has_cancel_reason: false }
  );
