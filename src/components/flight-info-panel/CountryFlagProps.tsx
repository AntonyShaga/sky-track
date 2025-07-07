import { emojiToCountryCode } from "../../utils/emojiToCountryCode.ts";

type CountryFlagProps = {
  code: string;
};

export function CountryFlag({ code }: CountryFlagProps) {
  const flagEmoji = emojiToCountryCode(code);
  return (
    <img
      src={`https://api.iconify.design/cif:${flagEmoji.toLowerCase()}.svg`}
      alt={`${code} flag`}
      width={24}
      height={24}
    />
  );
}
