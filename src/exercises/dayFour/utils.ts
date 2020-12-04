export const validateInt = (
  input: string | undefined,
  min: number,
  max: number
): boolean => !!input && parseInt(input) >= min && parseInt(input) <= max;

export const validateHeight = (input: string | undefined): boolean =>
  !!input &&
  !!input.match(/cm|in/) &&
  (input.match(/cm/)
    ? validateInt(input.replace(/cm/, ""), 150, 193)
    : validateInt(input.replace(/in/, ""), 59, 76));

export const validateHex = (input: string | undefined): boolean =>
  !!input && !!input.match(/^#[0-f]{6}$/);

export const validateOneOf = (
  input: string | undefined,
  colourOptions: string[]
) =>
  !!input && !!input.match(new RegExp("^(" + colourOptions.join("|") + ")$"));

export const validatePID = (input: string | undefined): boolean =>
  !!input && !!input.match(/^[0-9]{9}$/);
