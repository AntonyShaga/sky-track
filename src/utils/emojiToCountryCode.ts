export function emojiToCountryCode(emoji: string): string {
  const chars = [...emoji]; // правильно разбиваем surrogate pairs
  if (chars.length !== 2) return "";

  const code1 = chars[0].codePointAt(0);
  const code2 = chars[1].codePointAt(0);
  if (!code1 || !code2) return "";

  return String.fromCharCode(code1 - 0x1f1e6 + 65, code2 - 0x1f1e6 + 65);
}
