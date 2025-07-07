import { Icon } from "@iconify/react";
import { emojiToCountryCode } from "../../utils/emojiToCountryCode.ts";

type CountryFlagProps = {
  code: string;
};

export function CountryFlag({ code }: CountryFlagProps) {
  const flagEmoji = emojiToCountryCode(code);
  return <Icon icon={`cif:${flagEmoji.toLowerCase()}`} />;
}
