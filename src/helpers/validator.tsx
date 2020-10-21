export const required = (value: any) => (value ? undefined : "Required");
export const mustBeNumber = (value: number) =>
  isNaN(value) ? "Must be a number" : undefined;
export const minValue = (min: number) => (value: number) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const composeValidators = (...validators: any) => (value: any) =>
  validators.reduce(
    (error: any, validator: any) => error || validator(value),
    undefined
  );
