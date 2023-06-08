import { EducationExternalLinkSettings } from "../types";

export type education_settings = {
  CodeBuilderDefaultURI: string;
  CodeBuilderTitle: string;
  CanResizeCodeBuilder: boolean;
  disable_legacy_title_bar: boolean;
  post_process_filter: string;
  screenshot_border_path: string;
  HasQuiz: boolean;
} & (
  | {
      has_agent_capabilities: true;
      agent_capabilities: {
        has: boolean;
        can_modify_blocks: boolean;
      };
    }
  | { has_agent_capabilities: false }
) &
  (
    | {
        HasOverrideURI: true;
        OverrideURI: string;
      }
    | { HasOverrideURI: false }
  ) &
  (
    | {
        has_external_link_settings: true;
        external_link_settings: EducationExternalLinkSettings;
      }
    | { has_external_link_settings: false }
  );
