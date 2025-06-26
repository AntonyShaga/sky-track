import { Icon } from "@iconify/react";
import { emojiToCountryCode } from "../../utils/emojiToCountryCode.ts";

type CountryFlagProps = {
  code: string;
};

export function CountryFlag({ code }: CountryFlagProps) {
  const flagEmoji = emojiToCountryCode(code);
  console.log(code);
  console.log(flagEmoji);
  return <Icon icon={`cif:${flagEmoji.toLowerCase()}`} />;
}
